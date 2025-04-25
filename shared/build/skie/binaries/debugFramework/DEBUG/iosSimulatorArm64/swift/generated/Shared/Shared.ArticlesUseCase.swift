import Foundation

public extension shared.ArticlesUseCase {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func getArticles(currentPage: Swift.Int32) async throws -> [shared.Article] {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__4__getArticles(dispatchReceiver: self, currentPage: currentPage, suspendHandler: $0)
        }
    }

}
