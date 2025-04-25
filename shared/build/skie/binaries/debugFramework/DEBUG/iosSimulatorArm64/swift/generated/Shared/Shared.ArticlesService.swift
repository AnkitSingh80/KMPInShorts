import Foundation

public extension shared.ArticlesService {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func fetchArticles(pageNo: Swift.Int32) async throws -> shared.Response {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__3__fetchArticles(dispatchReceiver: self, pageNo: pageNo, suspendHandler: $0)
        }
    }

}
