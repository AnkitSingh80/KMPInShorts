import Foundation

public extension shared.Skie.RuntimeKotlin.SkieColdFlowIterator {

    struct __Suspend<E : Swift.AnyObject> {

        public let __kotlinObject: shared.SkieColdFlowIterator<E>

        public init(_ __kotlinObject: shared.SkieColdFlowIterator<E>) {
            self.__kotlinObject = __kotlinObject
        }

    }

}

public func skie<E : Swift.AnyObject>(_ kotlinObject: shared.SkieColdFlowIterator<E>) -> shared.Skie.RuntimeKotlin.SkieColdFlowIterator.__Suspend<E> {
    return shared.Skie.RuntimeKotlin.SkieColdFlowIterator.__Suspend(kotlinObject)
}

public extension shared.Skie.RuntimeKotlin.SkieColdFlowIterator.__Suspend {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func hasNext() async throws -> shared.KotlinBoolean {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__0__hasNext(dispatchReceiver: __kotlinObject as! shared.SkieColdFlowIterator<Swift.AnyObject>, suspendHandler: $0)
        }
    }

}
