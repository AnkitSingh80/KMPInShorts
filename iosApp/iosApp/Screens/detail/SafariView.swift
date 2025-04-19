//
//  SafariView.swift
//  iosApp
//
//  Created by Sandeep Gupta on 17/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//


import SwiftUI
import SafariServices


struct SafariView: UIViewControllerRepresentable {
    let url: URL
    
    func makeUIViewController(context: UIViewControllerRepresentableContext<SafariView>) -> SFSafariViewController {
        return SFSafariViewController(url: url)
    }
    
    func updateUIViewController(_ uiViewController: SFSafariViewController, 
                              context: UIViewControllerRepresentableContext<SafariView>) {
        // Update the view controller if needed
    }
}

// Usage:
struct DetailViewView: View {
    let url = URL(string: "https://www.google.com")!
    
    var body: some View {
        SafariView(url: url)
            .edgesIgnoringSafeArea(.all)
    }
}


struct DetailViewViewPreviews: PreviewProvider {
    static var previews: some View {
        DetailViewView()
    }
}
