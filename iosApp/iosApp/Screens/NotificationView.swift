//
//  Notification.swift
//  iosApp
//
//  Created by ankit on 09/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import SwiftUI
import shared

extension NotificationView{
    
    @MainActor
    class NotificationViewModelWrapper: ObservableObject{
        @Published var notificationList: [News] = []
        let articlesViewModel: ArticlesViewModel
        
        init(){
            let driverFactory = DatabaseDriverFactory()
            let dbHelpers = DatabaseHelper(databaseDriverFactory: driverFactory)
            articlesViewModel = ArticlesViewModel(dbHelper: dbHelpers)
        }
        
        func loadNotifications() {
            Task {
                do {
                    notificationList = try await articlesViewModel.fetchNotificationIos()
                } catch {
                    print("Error loading notifications: \(error)")
                }
            }
        }
    }
}


struct NotificationView: View {
    
    @ObservedObject private(set) var notificationViewModel: NotificationViewModelWrapper
    //@StateObject private var notificationViewModel = NotificationViewModelWrapper()


    var body: some View {
        NavigationView {
            List(notificationViewModel.notificationList) { notification in
                HStack(spacing: 12) {
                    
                    NotificationImageView(url: notification.image)
                    VStack(alignment: .leading, spacing: 4) {
                        Text(notification.title)
                            .font(.headline)
                       
                    }
                    Spacer()
                    
                    Text(notification.date)
                        .font(.caption)
                        .foregroundColor(.gray)
                } .onAppear{
                     print(notification.image)
                    print(notification.title)

                    }
                .padding(.vertical, 8)
            }
            .navigationTitle("Notifications")
        }
        .onAppear {
            notificationViewModel.loadNotifications()
        }
    }
}

extension News: @retroactive Identifiable {}
