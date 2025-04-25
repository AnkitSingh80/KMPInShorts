import Foundation

@frozen
public enum KotlinLazyThreadSafetyMode : Swift.Hashable, Swift.CaseIterable,
        Swift._ObjectiveCBridgeable {

    case synchronized
    case publication
    case none

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__KotlinLazyThreadSafetyMode, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__KotlinLazyThreadSafetyMode, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__KotlinLazyThreadSafetyMode?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__KotlinLazyThreadSafetyMode {
        switch self {
        case .synchronized: return shared.__KotlinLazyThreadSafetyMode.synchronized as shared.__KotlinLazyThreadSafetyMode
        case .publication: return shared.__KotlinLazyThreadSafetyMode.publication as shared.__KotlinLazyThreadSafetyMode
        case .none: return shared.__KotlinLazyThreadSafetyMode.none as shared.__KotlinLazyThreadSafetyMode
        }
    }

    private static func fromObjectiveC(_ source: shared.__KotlinLazyThreadSafetyMode?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__KotlinLazyThreadSafetyMode") }
        if source == shared.__KotlinLazyThreadSafetyMode.synchronized as shared.__KotlinLazyThreadSafetyMode {
            return .synchronized
        } else if source == shared.__KotlinLazyThreadSafetyMode.publication as shared.__KotlinLazyThreadSafetyMode {
            return .publication
        } else if source == shared.__KotlinLazyThreadSafetyMode.none as shared.__KotlinLazyThreadSafetyMode {
            return .none
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__KotlinLazyThreadSafetyMode")
        }
    }

    public typealias _ObjectiveCType = shared.__KotlinLazyThreadSafetyMode

}

public extension shared.KotlinLazyThreadSafetyMode {

    func toKotlinEnum() -> shared.__KotlinLazyThreadSafetyMode {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__KotlinLazyThreadSafetyMode {

    func toSwiftEnum() -> shared.KotlinLazyThreadSafetyMode {
        return shared.KotlinLazyThreadSafetyMode._unconditionallyBridgeFromObjectiveC(self)
    }

}
