//
//  WebStoryTextModifier.swift
//  iosApp
//
//  Created by ankit on 17/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//


import SwiftUI

struct WebStoryTextModifier: ViewModifier {
    let fontSize: CGFloat
    let bottomPadding: CGFloat

    func body(content: Content) -> some View {
        content
            .font(.system(size: fontSize))
            .foregroundStyle(.white)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.bottom, bottomPadding)
            .padding(.horizontal, 20)
    }
}

extension View {
    func webStoryTextStyle(fontSize: CGFloat = 20, bottomPadding: CGFloat = 4) -> some View {
        modifier(WebStoryTextModifier(fontSize: fontSize, bottomPadding: bottomPadding))
    }
}
