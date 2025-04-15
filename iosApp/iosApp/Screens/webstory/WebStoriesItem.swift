//
//  WebStoriesItem.swift
//  InShorsTestIos
//
//  Created by ankit on 18/03/25.
//

import SwiftUI
import shared

struct WebStoriesItem: View {
    let webStory: WebStory
    var body: some View {
        let screenWidth = UIScreen.main.bounds.width
        let screenHeight = (9.0 / 16.0) * screenWidth
        
        let imageUrl = webStory.imageUrl
            .replacingOccurrences(of: "<width>", with: "\(Int(screenWidth))")
            .replacingOccurrences(of: "<height>", with: "\(Int(screenHeight))")
        
        ZStack{
            AppFullScreenAsyncImageView(url: imageUrl)
            VStack{
                Text("Life Lessons You can Learn From Raja Ranjit Singh To be a Great Leader")
                    .padding(.top, 10)
                    .font(.system(size: 18))
                    .lineSpacing(CGFloat(4))
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding(.horizontal, 9)
            }.ignoresSafeArea(.all)
        }
    }
}

#Preview {
   // WebStoriesItem()
}
