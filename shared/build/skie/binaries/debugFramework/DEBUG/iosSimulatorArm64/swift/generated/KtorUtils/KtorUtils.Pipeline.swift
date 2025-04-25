import Foundation

public extension shared.Skie.KtorUtils.Pipeline {

    struct __Suspend<TSubject : Swift.AnyObject, TContext : Swift.AnyObject> {

        public let __kotlinObject: shared.Ktor_utilsPipeline<TSubject, TContext>

        public init(_ __kotlinObject: shared.Ktor_utilsPipeline<TSubject, TContext>) {
            self.__kotlinObject = __kotlinObject
        }

    }

}

public func skie<TSubject : Swift.AnyObject, TContext : Swift.AnyObject>(_ kotlinObject: shared.Ktor_utilsPipeline<TSubject, TContext>) -> shared.Skie.KtorUtils.Pipeline.__Suspend<TSubject, TContext> {
    return shared.Skie.KtorUtils.Pipeline.__Suspend(kotlinObject)
}

public extension shared.Skie.KtorUtils.Pipeline.__Suspend {

    @available(iOS 13, macOS 10.15, watchOS 6, tvOS 13, *)
    func execute(context: TContext, subject: TSubject) async throws -> TSubject {
        return try await SwiftCoroutineDispatcher.dispatch {
            shared.__SkieSuspendWrappersKt.Skie_Suspend__9__execute(dispatchReceiver: __kotlinObject as! shared.Ktor_utilsPipeline<Swift.AnyObject, Swift.AnyObject>, context: context as! Any, subject: subject as! Any, suspendHandler: $0)
        }
    }

}
