import Foundation

public extension shared.Kotlinx_coroutines_coreJob {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func join() async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__51__join(dispatchReceiver: self, suspendHandler: $0)
        }
    }

}
