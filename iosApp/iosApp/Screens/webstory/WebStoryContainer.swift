//
//  WebStoryContainer.swift
//  iosApp
//
//  Created by ankit on 15/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import SwiftUI
import shared


//
//struct WebStoryContainer: View {
//    
//    let viewModel: ArticlesViewModelWrapper
//    let article: Article
//    let size: Int
//    
//    @State private var currentIndex: Int = 0
//    private let timer = Timer.publish(every: 0.05, on: .main, in: .common).autoconnect()
//
//    var body: some View {
//        ZStack(alignment: .top) {
//            ScrollView(.horizontal, showsIndicators: false) {
//                HStack(spacing: 0) {
//                    ForEach(Array(article.list.enumerated()), id: \.element) { index, story in
//                        WebStoryView(webStory: story, imageCount: size)
//                            .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
//                            .background(
//                                GeometryReader { geo in
//                                    Color.clear
//                                        .onAppear {
//                                            let offsetX = geo.frame(in: .global).minX
//                                            let screenWidth = UIScreen.main.bounds.width
//                                            let i = Int(round(offsetX / screenWidth))
//                                            if i >= 0 && i < article.list.count {
//                                                currentIndex = i
//                                            }
//                                        }
//                                }
//                            )
//                    }
//                }
//            }
//            .scrollTargetBehavior(.viewAligned)
//            .ignoresSafeArea(.all)
//
//            // WhatsApp-style story indicator
//            StoryProgressIndicator(total: article.list.count, current: currentIndex)
//        }
//        .onAppear {
//            if article == viewModel.articlesState.articles.last {
//                viewModel.loadNextPage()
//            }
//        }
//    }
//}


struct WebStoryContainer: View {
    let article: Article
    let size: Int

    @State private var currentIndex: Int = 0
    @State private var progress: CGFloat = 0.0
    @State private var timer: Timer? = nil

    let storyDuration: TimeInterval = 5.0

    var body: some View {
        ZStack(alignment: .top) {
            TabView(selection: $currentIndex) {
                ForEach(Array(article.list.enumerated()), id: \.offset) { index, story in
                    WebStoryView(webStory: story, imageCount: size)
                        .tag(index)
                        .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                }
            }
            .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
            .tabViewStyle(.page(indexDisplayMode: .never))
            .ignoresSafeArea()
            
            VStack {
                SegmentedStoryProgressBar(count: article.list.count, current: currentIndex, progress: $progress)
                    .padding(.top, 40)

                Spacer()
            }
        }
        .onAppear {
            startTimer()
        }
        .onChange(of: currentIndex) {
            progress = 0
            startTimer()
        }
    }

    func startTimer() {
        timer?.invalidate()
        progress = 0

        timer = Timer.scheduledTimer(withTimeInterval: 0.05, repeats: true) { _ in
            if progress >= 1 {
                timer?.invalidate()
                moveToNext()
            } else {
                progress += 0.05 / storyDuration
            }
        }
    }

    func moveToNext() {
        if currentIndex < article.list.count - 1 {
            currentIndex += 1
        } else {
            // Handle end of story
        }
    }
}
