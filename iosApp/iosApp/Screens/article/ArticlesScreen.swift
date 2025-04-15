
import SwiftUI

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

