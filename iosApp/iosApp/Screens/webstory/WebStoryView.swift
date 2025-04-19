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
        let imageUrl =  webStory.imageUrl.getImageURL()
        ZStack{
            AppFullScreenAsyncImageView(url:imageUrl)
            LinearGradient(gradient: Gradient(colors: [AppColor.gradient,Color.clear,Color.clear, AppColor.gradient]),
                           startPoint: .top,
                           endPoint: .bottom)
            .edgesIgnoringSafeArea(.all)
            VStack() {
                Spacer()
                if(webStory.imageNo == 1){
                    Text(webStory.date)
                        .font(.headline)
                        .webStoryTextStyle(fontSize: 17, bottomPadding: 4)
                    
                }
                else {
                    Text(webStory.title)
                        .font(.headline)
                        .webStoryTextStyle()
                }
                HStack {
                    if(webStory.imageNo == 1){
                        Text(webStory.title)
                            .font(.headline)
                            .webStoryTextStyle(bottomPadding: 24)
                    }else {
                        Text(webStory.desc)
                            .webStoryTextStyle(bottomPadding: 24)
                            .lineLimit(3)
                            .truncationMode(.tail)
                    }
                    Spacer()
                    Image(systemName: "square.and.arrow.up")
                        .resizable()
                        .frame(width: 30, height: 30)
                        .foregroundColor(.white)
                        .padding()
                        .background(Color.black.opacity(0.5))
                        .cornerRadius(10)
                        .onTapGesture {
                            shareContent(url: webStory.wu)
                        }
                }
                
            }.frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                .ignoresSafeArea(.all)
            
        }
    }
}


private func shareContent(url : String) {
    
        guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
              let window = windowScene.windows.first else {
            return
        }

    let activityVC = UIActivityViewController(activityItems: [URL(string: url)!], applicationActivities: nil)
        window.rootViewController?.present(activityVC, animated: true)
    }

#Preview {
    WebStoryView(webStory: ArticlesViewModelWrapper().getDummy()[0], imageCount: 1 )
}

