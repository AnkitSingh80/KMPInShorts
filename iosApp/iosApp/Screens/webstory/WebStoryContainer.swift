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
                    .padding(.top, 54)

                Spacer()
            }
            
            HStack(spacing: 0) {
                Rectangle()
                    .fill(Color.black.opacity(0))
                    .frame(width: UIScreen.main.bounds.width / 2)
                    .contentShape(Rectangle())
                    .onTapGesture{
                        moveToPrev()
                    }
                
                Rectangle()
                    .fill(Color.black.opacity(0))
                    .frame(width: UIScreen.main.bounds.width / 2)
                    .contentShape(Rectangle())
                    .onTapGesture {
                        moveToNext()
                    }
            }
            .allowsHitTesting(true)
            
            Text("\(currentIndex + 1)/\(article.list.count)")
                .frame(maxWidth: .infinity, alignment: .center)
                .foregroundColor(.white)
                .padding(.top, 60)
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
        } else {}
    }
    
    func moveToPrev() {
        if currentIndex > 0 {
            currentIndex -= 1
        } else {}
    }
}
