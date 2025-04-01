//
//  ShortsView.swift
//  InShorsTestIos
//
//  Created by ankit on 17/03/25.
//

import SwiftUI

struct ShortsView: View {
 //   let article: Article
    var body: some View {
        VStack {
            AppAsyncImageView(url:"https://picsum.photos/200/300")
            Text("Mahindra XUV700 Ebon Edition (2021): Stealthy Elegance Unveiled")
                .padding(.top, 10)
                .font(.system(size: 18))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.black)
                .padding(.horizontal, 9)
            
            Text("28 minutes ago | By: Pallavi Mehta")
                .padding(.top, 10)
                .font(.system(size: 12))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.gray)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 9)
            
            
            Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sitcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sitcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sit pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sitcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur non nulla sit")
                .padding(.top, 10)
                .lineLimit(10)
                .truncationMode(.tail)
                .font(.system(size: 14))
                .lineSpacing(CGFloat(4))
                .foregroundStyle(.black)
                .opacity(0.7)
                .frame(maxWidth: .infinity, alignment: .leading)
                .padding(.horizontal, 9)
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
