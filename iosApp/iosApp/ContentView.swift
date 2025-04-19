import SwiftUI
import shared

struct ContentView: View {
    
    @State private var shouldOpenAbout = false
    
    init(shouldOpenAbout: Bool = false) {
        let appearance = UINavigationBarAppearance()
            appearance.configureWithTransparentBackground()
            appearance.backgroundColor = .clear
            UINavigationBar.appearance().standardAppearance = appearance
            UINavigationBar.appearance().scrollEdgeAppearance = appearance
    }
    
    var body: some View {
        NavigationStack{
            ArticlesScreen(viewModel: .init())
                .toolbar {
                    ToolbarItem {
                        Button {
                            shouldOpenAbout = true
                        } label: {
                            Label("About", systemImage: "bell").labelStyle(.titleAndIcon)
                        }
                        .fullScreenCover(isPresented: $shouldOpenAbout) {
                            NotificationView(notificationViewModel: .init(), isPresented: $shouldOpenAbout)
                        }
                    }
                }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
