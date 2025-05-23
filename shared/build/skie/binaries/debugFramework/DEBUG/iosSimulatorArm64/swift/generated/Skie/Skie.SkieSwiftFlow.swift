import Foundation

public final class SkieSwiftFlow<T>: _Concurrency.AsyncSequence, Swift._ObjectiveCBridgeable {

    public typealias AsyncIterator = SkieSwiftFlowIterator<T>

    public typealias Element = T

    public typealias _ObjectiveCType = SkieKotlinFlow<Swift.AnyObject>

    internal let delegate: Skie.org_jetbrains_kotlinx__kotlinx_coroutines_core.Flow.__Kotlin

    internal init(internal flow: Skie.org_jetbrains_kotlinx__kotlinx_coroutines_core.Flow.__Kotlin) {
        delegate = flow
    }

    public func makeAsyncIterator() -> SkieSwiftFlowIterator<T> {
        return SkieSwiftFlowIterator(flow: delegate)
    }

    public func _bridgeToObjectiveC() -> _ObjectiveCType {
        return SkieKotlinFlow(delegate)
    }

    public static func _forceBridgeFromObjectiveC(_ source: _ObjectiveCType, result: inout SkieSwiftFlow<T>?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: _ObjectiveCType, result: inout SkieSwiftFlow<T>?) -> Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: _ObjectiveCType?) -> SkieSwiftFlow<T> {
        return fromObjectiveC(source)
    }

    private static func fromObjectiveC(_ source: _ObjectiveCType?) -> SkieSwiftFlow<T> {
        return SkieSwiftFlow(internal: source!)
    }
}


