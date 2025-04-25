import Foundation

public extension shared.Ktor_client_coreHttpClientCall {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func body(info: shared.Ktor_utilsTypeInfo) async throws -> Any {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__53__body(dispatchReceiver: self, info: info, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func bodyNullable(info: shared.Ktor_utilsTypeInfo) async throws -> Any? {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__54__bodyNullable(dispatchReceiver: self, info: info, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func getResponseContent() async throws -> shared.Ktor_ioByteReadChannel {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__55__getResponseContent(dispatchReceiver: self, suspendHandler: $0)
        }
    }

}
