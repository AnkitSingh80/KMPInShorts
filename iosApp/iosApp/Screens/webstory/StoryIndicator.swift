//
//  StoryIndicator.swift
//  iosApp
//
//  Created by ankit on 15/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import SwiftUI

//struct StoryIndicator: View {
//    var progress: CGFloat
//
//    var body: some View {
//        
//        GeometryReader { geometry in
//            ZStack(alignment: .leading){
//                Capsule().fill(Color.white.opacity(0.4))
//                Capsule().fill(Color.white)
//                    .frame(width: geometry.size.width * progress)
//            }
//        }.frame(height: 4)
//    }
//}


//struct StoryProgressBar: View {
//    @Binding var progress: CGFloat
//
//    var body: some View {
//        GeometryReader { geo in
//            ZStack(alignment: .leading) {
//                Rectangle()
//                    .foregroundColor(.gray.opacity(0.4))
//                Rectangle()
//                    .foregroundColor(.white)
//                    .frame(width: geo.size.width * progress)
//                    .animation(.linear(duration: 0.05), value: progress)
//            }
//            .cornerRadius(3)
//        }
//        .frame(height: 4)
//    }
//}


struct SegmentedStoryProgressBar: View {
    let count: Int
    let current: Int
    @Binding var progress: CGFloat

    var body: some View {
        HStack(spacing: 4) {
            ForEach(0..<count, id: \.self) { index in
                GeometryReader { geo in
                    ZStack(alignment: .leading) {
                        Capsule()
                            .foregroundColor(.white.opacity(0.4))

                        if index < current {
                            Capsule()
                                .foregroundColor(.white)
                                .frame(width: geo.size.width)
                        } else if index == current {
                            Capsule()
                                .foregroundColor(.white)
                                .frame(width: geo.size.width * progress)
                                .animation(.linear(duration: 0.05), value: progress)
                        }
                    }
                }
                .frame(height: 4)
            }
        }
        .padding(.horizontal)
    }
}


