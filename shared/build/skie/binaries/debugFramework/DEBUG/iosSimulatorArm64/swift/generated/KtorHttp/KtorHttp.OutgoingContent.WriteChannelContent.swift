import Foundation

public extension shared.Ktor_httpOutgoingContent.WriteChannelContent {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeTo(channel: shared.Ktor_ioByteWriteChannel) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__7__writeTo(dispatchReceiver: self, channel: channel, suspendHandler: $0)
        }
    }

}
