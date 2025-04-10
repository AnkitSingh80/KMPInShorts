//
//  Notification.swift
//  iosApp
//
//  Created by ankit on 09/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import SwiftUI


struct NotificationItem : Identifiable {
    let id = UUID()
    let image: String
    let title: String
    let message: String
    let time: String
}

struct Notification : View {
    
    let notifications: [NotificationItem] = [
            NotificationItem(image: "person.fill", title: "New Message", message: "Hey, check this out!", time: "10m ago"),
            NotificationItem(image: "bell.fill", title: "Reminder", message: "Don't forget your meeting.", time: "1h ago"),
            NotificationItem(image: "star.fill", title: "Achievement", message: "You reached level 10!", time: "3h ago")
        ]
    
    var body: some View {
        NavigationView {
            List(notifications) { notification in
                HStack(spacing: 12) {
                    Image(systemName: notification.image)
                        .resizable()
                        .scaledToFit()
                        .frame(width: 40, height: 40)
                        .clipShape(Circle())
                        .foregroundColor(.blue)
                    
                    VStack(alignment: .leading, spacing: 4) {
                        Text(notification.title)
                            .font(.headline)
                        Text(notification.message)
                            .font(.subheadline)
                            .foregroundColor(.gray)
                    }
                    
                    Spacer()
                    
                    Text(notification.time)
                        .font(.caption)
                        .foregroundColor(.gray)
                }
                .padding(.vertical, 8)
            }
            .navigationTitle("Notifications")
        }
    }
}
