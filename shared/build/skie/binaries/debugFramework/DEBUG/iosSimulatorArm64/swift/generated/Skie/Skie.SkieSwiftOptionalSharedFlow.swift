import Foundation

public final class SkieSwiftOptionalSharedFlow<T>: _Concurrency.AsyncSequence, Swift._ObjectiveCBridgeable {

    public typealias AsyncIterator = SkieSwiftFlowIterator<T?>

    public typealias Element = T?

    public typealias _ObjectiveCType = SkieKotlinOptionalSharedFlow<Swift.AnyObject>

    internal let delegate: Skie.org_jetbrains_kotlinx__kotlinx_coroutines_core.SharedFlow.__Kotlin

    internal init(internal flow: Skie.org_jetbrains_kotlinx__kotlinx_coroutines_core.SharedFlow.__Kotlin) {
        delegate = flow
    }

    public var replayCache: [T?] {
        return delegate.replayCache as! [T?]
    }

    public func makeAsyncIterator() -> SkieSwiftFlowIterator<T?> {
        return SkieSwiftFlowIterator(flow: delegate)
    }

    public func _bridgeToObjectiveC() -> _ObjectiveCType {
        return SkieKotlinOptionalSharedFlow(delegate)
    }

    public static func _forceBridgeFromObjectiveC(_ source: _ObjectiveCType, result: inout SkieSwiftOptionalSharedFlow<T>?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: _ObjectiveCType, result: inout SkieSwiftOptionalSharedFlow<T>?) -> Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: _ObjectiveCType?) -> SkieSwiftOptionalSharedFlow<T> {
        return fromObjectiveC(source)
    }

    private static func fromObjectiveC(_ source: _ObjectiveCType?) -> SkieSwiftOptionalSharedFlow<T> {
        return SkieSwiftOptionalSharedFlow(internal: source!)
    }
}


