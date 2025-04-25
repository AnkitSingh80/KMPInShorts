import Foundation

@frozen
public enum KotlinKVariance : Swift.Hashable, Swift.CaseIterable, Swift._ObjectiveCBridgeable {

    case invariant
    case `in`
    case out

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__KotlinKVariance, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__KotlinKVariance, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__KotlinKVariance?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__KotlinKVariance {
        switch self {
        case .invariant: return shared.__KotlinKVariance.invariant as shared.__KotlinKVariance
        case .`in`: return shared.__KotlinKVariance.`in` as shared.__KotlinKVariance
        case .out: return shared.__KotlinKVariance.out as shared.__KotlinKVariance
        }
    }

    private static func fromObjectiveC(_ source: shared.__KotlinKVariance?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__KotlinKVariance") }
        if source == shared.__KotlinKVariance.invariant as shared.__KotlinKVariance {
            return .invariant
        } else if source == shared.__KotlinKVariance.`in` as shared.__KotlinKVariance {
            return .`in`
        } else if source == shared.__KotlinKVariance.out as shared.__KotlinKVariance {
            return .out
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__KotlinKVariance")
        }
    }

    public typealias _ObjectiveCType = shared.__KotlinKVariance

}

public extension shared.KotlinKVariance {

    func toKotlinEnum() -> shared.__KotlinKVariance {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__KotlinKVariance {

    func toSwiftEnum() -> shared.KotlinKVariance {
        return shared.KotlinKVariance._unconditionallyBridgeFromObjectiveC(self)
    }

}
