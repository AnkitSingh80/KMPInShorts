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
    let imageCount: Int
    var body: some View {
        let screenWidth = UIScreen.main.bounds.width
        let screenHeight = (9.0 / 16.0) * screenWidth
        
        let imageUrl = webStory.imageUrl
            .replacingOccurrences(of: "<width>", with: "\(Int(screenWidth))")
            .replacingOccurrences(of: "<height>", with: "\(Int(screenHeight))")
        ZStack{
            AppFullScreenAsyncImageView(url:imageUrl)
            LinearGradient(gradient: Gradient(colors: [AppColor.GrayColor.opacity(0.5),Color.clear,Color.clear, AppColor.GrayColor.opacity(0.5)]),
                           startPoint: .top,
                           endPoint: .bottom)
                           .edgesIgnoringSafeArea(.all)
            VStack() {
                Spacer()
                if(webStory.imageNo == 1){
                    Text(webStory.date)
                        .font(.headline)
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .foregroundStyle(.white)
                        .padding(.bottom, 4)
                        .padding(.horizontal, 20)
                    
                }
                else {
                    Text(webStory.title)
                        .font(.headline)
                        .font(.system(size : 20))
                        .frame(maxWidth: .infinity, alignment: .leading)
                        .foregroundStyle(.white)
                        .padding(.bottom, 4)
                        .padding(.horizontal, 20)
                }
                HStack {
                    if(webStory.imageNo == 1){
                        Text(webStory.title)
                            .font(.headline)
                            .font(.system(size : 20))
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .foregroundStyle(.white)
                            .padding(.bottom, 24)
                            .padding(.horizontal, 20)
                    }else {
                        Text(webStory.desc)
                            .font(.system(size : 20))
                            .lineLimit(3)
                            .truncationMode(.tail)
                            .foregroundStyle(.white)
                            .padding(.bottom, 24)
                            .padding(.horizontal, 20)
                    }
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

