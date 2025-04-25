import Foundation

public extension shared.KotlinSuspendFunction2 {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func invoke(p1: Any?, p2: Any?) async throws -> Any? {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__52__invoke(dispatchReceiver: self, p1: p1, p2: p2, suspendHandler: $0)
        }
    }

}
