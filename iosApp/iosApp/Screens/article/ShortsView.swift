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
    
    @State private var showDetail = false
    
    @State private var offset: CGSize = .zero
    
    var body: some View {
        let imageUrl = article.imageUrl.getImageURL()
        VStack {
            AppAsyncImageView(url:imageUrl)
            Text(article.title)
                .articleTextStyle(fontSize: 18, color: .black)
        
            Text(article.date)
                .articleTextStyle(fontSize: 12, color: .gray)
           
            Text(article.desc)
                .articleTextStyle(
                    fontSize: 16,
                    color: .black,
                    opacity: 0.8,
                    lineLimit: 10,
                    lineSpacing: 6
                )
            Spacer()
            Text("Swipe left to read full story")
                .frame(maxWidth: .infinity, maxHeight: 70, alignment: .center)
                .padding(.bottom, 10)
                .background(Color.gray.opacity(0.1))
        }.frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
         .ignoresSafeArea(.all)
         .navigationDestination(isPresented: $showDetail, destination: {
             let url = URL(string: article.wu)!
             SafariView(url: url)
                 .edgesIgnoringSafeArea(.all)
         })
                .offset(x: offset.width, y: 0)
                .animation(.spring(), value: offset)
    }
}


#Preview {
    // ShortsView()
}
