import Foundation

public extension shared.Ktor_ioByteWriteChannel {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func awaitFreeSpace() async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__33__awaitFreeSpace(dispatchReceiver: self, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeAvailable(src: shared.Ktor_ioChunkBuffer) async throws -> shared.KotlinInt {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__34__writeAvailable(dispatchReceiver: self, src: src, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeAvailable(
        src: shared.KotlinByteArray,
        offset: Swift.Int32,
        length: Swift.Int32
    ) async throws -> shared.KotlinInt {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__35__writeAvailable(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeAvailable(
        src: Swift.UnsafeMutableRawPointer,
        offset: Swift.Int32,
        length: Swift.Int32
    ) async throws -> shared.KotlinInt {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__36__writeAvailable(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeAvailable(
        src: Swift.UnsafeMutableRawPointer,
        offset: Swift.Int64,
        length: Swift.Int64
    ) async throws -> shared.KotlinInt {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__37__writeAvailable(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeByte(b: Swift.Int8) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__38__writeByte(dispatchReceiver: self, b: b, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeDouble(d: Swift.Double) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__39__writeDouble(dispatchReceiver: self, d: d, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFloat(f: Swift.Float) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__40__writeFloat(dispatchReceiver: self, f: f, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFully(
        memory: shared.Ktor_ioMemory,
        startIndex: Swift.Int32,
        endIndex: Swift.Int32
    ) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__41__writeFully(dispatchReceiver: self, memory: memory, startIndex: startIndex, endIndex: endIndex, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFully(src: shared.Ktor_ioBuffer) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__42__writeFully(dispatchReceiver: self, src: src, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFully(
        src: shared.KotlinByteArray,
        offset: Swift.Int32,
        length: Swift.Int32
    ) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__43__writeFully(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFully(
        src: Swift.UnsafeMutableRawPointer,
        offset: Swift.Int32,
        length: Swift.Int32
    ) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__44__writeFully(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeFully(
        src: Swift.UnsafeMutableRawPointer,
        offset: Swift.Int64,
        length: Swift.Int64
    ) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__45__writeFully(dispatchReceiver: self, src: src, offset: offset, length: length, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeInt(i: Swift.Int32) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__46__writeInt(dispatchReceiver: self, i: i, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeLong(l: Swift.Int64) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__47__writeLong(dispatchReceiver: self, l: l, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writePacket(packet: shared.Ktor_ioByteReadPacket) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__48__writePacket(dispatchReceiver: self, packet: packet, suspendHandler: $0)
        }
    }

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeShort(s: Swift.Int16) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__49__writeShort(dispatchReceiver: self, s: s, suspendHandler: $0)
        }
    }

    @available(*, deprecated, message: "Use write { } instead.")
    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func writeSuspendSession(visitor: shared.KotlinSuspendFunction1) async throws {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__50__writeSuspendSession(dispatchReceiver: self, visitor: visitor, suspendHandler: $0)
        }
    }

}
