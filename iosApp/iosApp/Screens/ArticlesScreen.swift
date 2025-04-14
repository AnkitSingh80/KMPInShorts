//
//  ArticlesScreen.swift
//  iosApp
//
//  Created by Petros Efthymiou on 27/11/2023.
//  Copyright © 2023 orgName. All rights reserved.
//

import SwiftUI
import shared

extension ArticlesScreen {
    
    @MainActor
    class ArticlesViewModelWrapper: ObservableObject {
        let articlesViewModel: ArticlesViewModel
        
    
        init() {
            let driverFactory = DatabaseDriverFactory()
            let dbHelpers = DatabaseHelper(databaseDriverFactory: driverFactory)
          //  articlesViewModel = ArticlesViewModel()
            articlesViewModel = ArticlesViewModel(dbHelper: dbHelpers)
            articlesState = articlesViewModel.articlesState.value
            
            let news = News(
                wu: "some-wu",
                date: "2025-04-10",
                image: "https://static.sociofyme.com/photo/msid-151403580,imgsize-37904,updatedat-1744437990971,width-402,height-226,resizemode-75/151403580.jpg",
                title: "Some Title testing here",
                timeInMills: 1234567890
            )
            articlesViewModel.insertNotification(news: news)
        }
        
        @Published var articlesState: ArticlesState
        @Published var isLoading = false


        func startObserving() {
            Task {
                for await articlesS in articlesViewModel.articlesState {
                    self.articlesState = articlesS
                    print("New Articles State Received: \(articlesS)")
                    print("Article count: \(articlesS.articles.count)")
                    isLoading = false
                }
            }
        }
        
        func loadNextPage(){
            guard !isLoading else {
                print("API call in progress, ignoring request")
                return
            }
            isLoading = true
            articlesViewModel.loadNextPageApi()
            print("lastPageApiCall")
        }
        
    }
}

struct ArticlesScreen: View {
    
    @ObservedObject private(set) var viewModel: ArticlesViewModelWrapper
    
    var body: some View {
        VStack {
            //AppBar()
            
            if viewModel.articlesState.loading {
                Loader()
            }
            
            if let error = viewModel.articlesState.error {
                ErrorMessage(message: error)
            }
            
            if(!viewModel.articlesState.articles.isEmpty) {
                NavigationView {
                    ScrollView(.vertical, showsIndicators: false) {
                        LazyVStack(spacing: 0) {
                            ForEach(viewModel.articlesState.articles, id: \.self) { article in
                                if article.tn == "webstory" {
                                    let size = article.list.count
                                    ScrollView(.horizontal, showsIndicators: false){
                                        HStack(){
                                            ForEach(article.list, id: \.self){
                                               story in
                                                WebStoryView(webStory: story, imageCount: size)
                        
                                           }
                                        }.frame(height: UIScreen.main.bounds.height)
                                        .scrollTargetLayout()
                                    }
                                    .onAppear(){
                                        if(article == viewModel.articlesState.articles.last){
                                            viewModel.loadNextPage()
                                        }
                                    }
                                    .scrollTargetBehavior(.viewAligned)
                                    .ignoresSafeArea(.all)
                                }
                                  else {
                                ShortsView(article: article)
                                        .frame(height: UIScreen.main.bounds.height)
                                        .onAppear(){
                                            if(article == viewModel.articlesState.articles.last){
                                                viewModel.loadNextPage()
                                            }
                                        }
                                }
                            }
                        }
                        .scrollTargetLayout()
                    }
                    .ignoresSafeArea(.all)
                    .scrollTargetBehavior(.paging)
                }
            }
            
        }.onAppear{
            self.viewModel.startObserving()
        }

    }
}

struct AppBar: View {
    var body: some View {
        Text("Articles")
            .font(.largeTitle)
            .fontWeight(.bold)
    }
}

struct ArticleItemView: View {
    var article: Article
    
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            AsyncImage(url: URL(string: article.imageUrl)) { phase in
                if phase.image != nil {
                    phase.image!
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                } else if phase.error != nil {
                    Text("Image Load Error")
                } else {
                    ProgressView()
                }
            }
            Text(article.title)
                .font(.title)
                .fontWeight(.bold)
            Text(article.desc)
            Text(article.date).frame(maxWidth: .infinity, alignment: .trailing).foregroundStyle(.gray)
        }
        .padding(16)
    }
}

struct Loader: View {
    var body: some View {
        ProgressView()
    }
}

struct ErrorMessage: View {
    var message: String
    
    var body: some View {
        Text(message)
            .font(.title)
    }
}

