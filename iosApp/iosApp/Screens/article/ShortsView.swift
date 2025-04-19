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
         .gesture(
                    DragGesture()
                        .onChanged { gesture in
                            offset = gesture.translation
                        }
                        .onEnded { gesture in
                            if gesture.translation.width < -100 {
                                // Right swipe detected
                                print("Right swipe completed!")
                                withAnimation{
                                    showDetail=true
                                }
                               
                                                            
                                // Perform your action here
                            }
                            offset = .zero
                        }
         ).navigationDestination(isPresented: $showDetail, destination: {
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
