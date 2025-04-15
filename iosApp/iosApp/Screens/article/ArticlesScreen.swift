
import SwiftUI

struct ArticlesScreen: View {
    
    @ObservedObject private(set) var viewModel: ArticlesViewModelWrapper
    
    var body: some View {
        VStack {
            
            if viewModel.articlesState.loading {
                Loader()
            }
            
            if let error = viewModel.articlesState.error {
                ErrorMessage(message: error)
            }
            
            if(!viewModel.articlesState.articles.isEmpty) {
                let size = viewModel.articlesState.articles.count
                NavigationView {
                    ScrollView(.vertical, showsIndicators: false) {
                        LazyVStack(spacing: 0) {
                            ForEach(viewModel.articlesState.articles, id: \.self) { article in
                                if article.tn == "webstory" {
                                    WebStoryContainer(article: article, size: size)
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

