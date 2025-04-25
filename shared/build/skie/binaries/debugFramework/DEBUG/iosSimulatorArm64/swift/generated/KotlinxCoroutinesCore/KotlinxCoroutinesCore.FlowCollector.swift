import Foundation

public extension shared.Kotlinx_coroutines_coreFlowCollector {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func emit(value: Any?) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__2__emit(dispatchReceiver: self, value: value, suspendHandler: $0)
        }
    }

}
