import Foundation

public extension shared.ArticlesViewModel {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func fetchNotificationIos() async throws -> [shared.News] {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__5__fetchNotificationIos(dispatchReceiver: self, suspendHandler: $0)
        }
    }

}
