
import SwiftUI
import shared

@MainActor
struct ArticlesScreen: View {
    
    @ObservedObject private(set) var viewModel: ArticlesViewModelWrapper
    
    @State private var scrollTarget: Int? = nil
    @State private var hasReachedEnd = false
    @State var currentIndex: Int = 0

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
                    ScrollViewReader { proxy in
                        ScrollView(.vertical, showsIndicators: false) {
                            LazyVStack(spacing: 0) {
                                ForEach(Array(viewModel.articlesState.articles.enumerated()), id: \.element) { index, article in
                                    if article.tn == "webstory" {
                                        WebStoryContainer(hasReachedEnd: $hasReachedEnd, article: article, size: size)
                                            .id(index)
                                            .onAppear(){
                                                currentIndex = index
                                                if(article == viewModel.articlesState.articles.last){
                                                    viewModel.loadNextPage()
                                                }
                                            }
                                    } else {
                                        ShortsView(article: article)
                                            .frame(height: UIScreen.main.bounds.height)
                                            .id(index)
                                            .onAppear(){
                                                currentIndex = index
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
                        .onChange(of: hasReachedEnd) {
                            withAnimation {
                                proxy.scrollTo(currentIndex + 1, anchor: .top)
                            }
                            hasReachedEnd = false
                        }
                    }
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

