//
//  HorizontalStoryScrollView.swift
//  iosApp
//
//  Created by ankit on 29/03/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import SwiftUI
import shared

struct HorizontalStoryScrollView: View {
    let article: Article

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 8) {
                ForEach(article.list, id: \.self) { story in
                   // WebStoryView(webStory: story)
                    //    .frame(width: 120, height: 200) // Fixed size for smooth scrolling
                    //    .cornerRadius(12)
                }
            }
            .padding(.horizontal)
        }
        .scrollTargetBehavior(.paging)
        .frame(height: 220) // Prevents layout jumping
    }
}
