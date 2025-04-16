import Foundation
import SwiftUI
import shared

struct NotificationView: View {
    
    @ObservedObject private(set) var notificationViewModel: NotificationViewModel
    @Binding var isPresented: Bool
    var body: some View {
        NavigationView {
            List(notificationViewModel.notificationList) { notification in
                HStack(spacing: 8) {
                    NotificationImageView(url: notification.image)
                    VStack(alignment: .leading, spacing: 4) {
                        Text(notification.title)
                            .font(.caption)
                    }
                    Spacer()
                    Text(notification.date)
                        .font(.caption)
                        .foregroundColor(.gray)
                }.onAppear{
                    print(notification.image)
                    print(notification.title)
                    }
            }
            .navigationTitle("Notifications")
            .navigationBarTitleDisplayMode(.inline)
            .toolbarBackground(Color.white, for: .navigationBar)
            .toolbarBackground(.visible, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .cancellationAction){
                    Button{
                        isPresented = false
                    }
                    label: {
                        Label("Close", systemImage: "xmark")
                    }
                }
            }
        }
        .onAppear {
            notificationViewModel.loadNotifications()
        }
    }
}

extension News: @retroactive Identifiable {}
