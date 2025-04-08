//
//  ShortsView.swift
//  InShorsTestIos
//
//  Created by ankit on 17/03/25.
//

import SwiftUI
import shared

struct ShortsView: View {
    let article: Article
    var body: some View {
        let screenWidth = UIScreen.main.bounds.width
              let screenHeight = (9.0 / 16.0) * screenWidth

              let imageUrl = article.imageUrl
                  .replacingOccurrences(of: "<width>", with: "\(Int(screenWidth))")
                  .replacingOccurrences(of: "<height>", with: "\(Int(screenHeight))")
        VStack {
            AppAsyncImageView(url:imageUrl)
            Text(article.title)
                .padding(.top, 10)
                .font(.system(size: 18))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.black)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 10)
            
            Text(article.date)
                .padding(.top, 10)
                .font(.system(size: 12))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.gray)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 10)
            
            
            Text(article.desc)
                .padding(.top, 10)
                .lineLimit(10)
                .truncationMode(.tail)
                .font(.system(size: 16))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.black)
                .opacity(0.8)
                .lineSpacing(CGFloat(6))
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 10)
            Spacer()
            Text("Swipe left to read full story")
                .frame(maxWidth: .infinity, maxHeight: 70, alignment: .center)
                .padding(.bottom, 10)
                .background(Color.gray.opacity(0.1))
        }.frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
            .ignoresSafeArea(.all)
    }
}


#Preview {
   // ShortsView()
}
