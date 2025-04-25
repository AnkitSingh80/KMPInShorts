import Foundation

@frozen
public enum Koin_coreKind : Swift.Hashable, Swift.CaseIterable, Swift._ObjectiveCBridgeable {

    case singleton
    case factory
    case scoped

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__Koin_coreKind, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__Koin_coreKind, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__Koin_coreKind?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__Koin_coreKind {
        switch self {
        case .singleton: return shared.__Koin_coreKind.singleton as shared.__Koin_coreKind
        case .factory: return shared.__Koin_coreKind.factory as shared.__Koin_coreKind
        case .scoped: return shared.__Koin_coreKind.scoped as shared.__Koin_coreKind
        }
    }

    private static func fromObjectiveC(_ source: shared.__Koin_coreKind?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Koin_coreKind") }
        if source == shared.__Koin_coreKind.singleton as shared.__Koin_coreKind {
            return .singleton
        } else if source == shared.__Koin_coreKind.factory as shared.__Koin_coreKind {
            return .factory
        } else if source == shared.__Koin_coreKind.scoped as shared.__Koin_coreKind {
            return .scoped
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Koin_coreKind")
        }
    }

    public typealias _ObjectiveCType = shared.__Koin_coreKind

}

public extension shared.Koin_coreKind {

    func toKotlinEnum() -> shared.__Koin_coreKind {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__Koin_coreKind {

    func toSwiftEnum() -> shared.Koin_coreKind {
        return shared.Koin_coreKind._unconditionallyBridgeFromObjectiveC(self)
    }

}
