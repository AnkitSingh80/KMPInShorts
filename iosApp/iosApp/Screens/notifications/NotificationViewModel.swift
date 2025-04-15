//
//  NotificationViewModel.swift
//  iosApp
//
//  Created by ankit on 15/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import shared


@MainActor
class NotificationViewModel :  ObservableObject{
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

