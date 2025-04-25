import Foundation

@frozen
public enum Koin_coreLevel : Swift.Hashable, Swift.CaseIterable, Swift._ObjectiveCBridgeable {

    case debug
    case info
    case warning
    case error
    case none

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__Koin_coreLevel, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__Koin_coreLevel, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__Koin_coreLevel?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__Koin_coreLevel {
        switch self {
        case .debug: return shared.__Koin_coreLevel.debug as shared.__Koin_coreLevel
        case .info: return shared.__Koin_coreLevel.info as shared.__Koin_coreLevel
        case .warning: return shared.__Koin_coreLevel.warning as shared.__Koin_coreLevel
        case .error: return shared.__Koin_coreLevel.error as shared.__Koin_coreLevel
        case .none: return shared.__Koin_coreLevel.none as shared.__Koin_coreLevel
        }
    }

    private static func fromObjectiveC(_ source: shared.__Koin_coreLevel?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Koin_coreLevel") }
        if source == shared.__Koin_coreLevel.debug as shared.__Koin_coreLevel {
            return .debug
        } else if source == shared.__Koin_coreLevel.info as shared.__Koin_coreLevel {
            return .info
        } else if source == shared.__Koin_coreLevel.warning as shared.__Koin_coreLevel {
            return .warning
        } else if source == shared.__Koin_coreLevel.error as shared.__Koin_coreLevel {
            return .error
        } else if source == shared.__Koin_coreLevel.none as shared.__Koin_coreLevel {
            return .none
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Koin_coreLevel")
        }
    }

    public typealias _ObjectiveCType = shared.__Koin_coreLevel

}

public extension shared.Koin_coreLevel {

    func toKotlinEnum() -> shared.__Koin_coreLevel {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__Koin_coreLevel {

    func toSwiftEnum() -> shared.Koin_coreLevel {
        return shared.Koin_coreLevel._unconditionallyBridgeFromObjectiveC(self)
    }

}
