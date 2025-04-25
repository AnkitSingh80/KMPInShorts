import Foundation

public extension shared.Ktor_client_coreHttpClientEngine {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func execute(data: shared.Ktor_client_coreHttpRequestData) async throws -> shared.Ktor_client_coreHttpResponseData {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__8__execute(dispatchReceiver: self, data: data, suspendHandler: $0)
        }
    }

}
