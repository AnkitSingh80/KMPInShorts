//
//  ShortsView.swift
//  InShorsTestIos
//
//  Created by ankit on 17/03/25.
//

import SwiftUI
import shared

struct WebStoryView: View {
    let webStory: WebStory
    var body: some View {
        let screenWidth = UIScreen.main.bounds.width
        let screenHeight = (9.0 / 16.0) * screenWidth
        
        let imageUrl = webStory.imageUrl
            .replacingOccurrences(of: "<width>", with: "\(Int(screenWidth))")
            .replacingOccurrences(of: "<height>", with: "\(Int(screenHeight))")
        ZStack{
            AppFullScreenAsyncImageView(url:imageUrl)
            VStack() {
                Text("Text here")
                    .frame(maxWidth: .infinity, alignment: .center)
                Spacer()
                Text(webStory.date)
                    .font(.headline)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .foregroundStyle(.white)
                    .padding(.bottom, 4)
                    .padding(.horizontal, 20)
                HStack {
                    Text(webStory.desc)
                        .font(.title)
                        .lineLimit(3)
                        .truncationMode(.tail)
                        .foregroundStyle(.white)
                        .padding(.bottom, 24)
                        .padding(.horizontal, 20)
                
                    Spacer()
                    Image(systemName: "square.and.arrow.up")
                        .resizable()
                        .frame(width: 30, height: 30)
                        .foregroundColor(.white)
                        .padding()
                        .background(Color.black.opacity(0.5))
                        .cornerRadius(10)
                }
                
            }.frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                .ignoresSafeArea(.all)
        }

    }
}


#Preview {
   // ShortsView()
}

