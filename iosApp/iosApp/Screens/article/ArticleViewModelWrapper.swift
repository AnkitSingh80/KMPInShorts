//
//  ArticleViewModel.swift
//  iosApp
//
//  Created by ankit on 15/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import shared

@MainActor
class ArticlesViewModelWrapper: ObservableObject {
    let articlesViewModel: ArticlesViewModel
    
    @Published var articlesState: ArticlesState
    @Published var isLoading = false
    
    init() {
        let driverFactory = DatabaseDriverFactory()
        let dbHelpers = DatabaseHelper(databaseDriverFactory: driverFactory)
        articlesViewModel = ArticlesViewModel(dbHelper: dbHelpers)
        articlesState = articlesViewModel.articlesState.value
        Dummy().saveData(viewModel: articlesViewModel)
    }
    
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
    
    func getDummy() -> [WebStory] {
        return articlesViewModel.getDummyWeb()
    }
}
