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

    var body: some View {
        NavigationView {
            List($notificationViewModel.notificationList, id: \.id) { notification in
                HStack(spacing: 12) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(notification.id)
                            .font(.headline)
//                        Text(notification.message)
//                            .font(.subheadline)
//                            .foregroundColor(.gray)
                    }
                    
                    Spacer()
                    
//                    Text(notification.time)
//                        .font(.caption)
//                        .foregroundColor(.gray)
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

extension News: @retroactive Identifiable {
    public var id: String { title }
}
