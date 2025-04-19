//
//  ArticleTextModifier.swift
//  iosApp
//
//  Created by ankit on 17/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//


import SwiftUI

struct ArticleTextModifier: ViewModifier {
    let fontSize: CGFloat
    let color: Color
    var opacity: Double = 1.0
    var lineLimit: Int? = nil
    var lineSpacing: CGFloat = 4

    func body(content: Content) -> some View {
        content
            .font(.system(size: fontSize))
            .foregroundStyle(color)
            .opacity(opacity)
            .lineSpacing(lineSpacing)
            .lineLimit(lineLimit)
            .truncationMode(.tail)
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.top, 10)
            .padding(.horizontal, 10)
    }
}

extension View {
    func articleTextStyle(
        fontSize: CGFloat,
        color: Color,
        opacity: Double = 1.0,
        lineLimit: Int? = nil,
        lineSpacing: CGFloat = 4
    ) -> some View {
        modifier(ArticleTextModifier(
            fontSize: fontSize,
            color: color,
            opacity: opacity,
            lineLimit: lineLimit,
            lineSpacing: lineSpacing
        ))
    }
}
