import Foundation

public extension shared.KotlinSuspendFunction1 {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func invoke(p1: Any?) async throws -> Any? {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__56__invoke(dispatchReceiver: self, p1: p1, suspendHandler: $0)
        }
    }

}
