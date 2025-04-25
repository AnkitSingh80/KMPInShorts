import Foundation

@frozen
public enum Ktor_utilsMonth : Swift.Hashable, Swift.CaseIterable, Swift._ObjectiveCBridgeable {

    case january
    case february
    case march
    case april
    case may
    case june
    case july
    case august
    case september
    case october
    case november
    case december

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public var value: Swift.String {
        return (self as _ObjectiveCType).value
    }

    public static var companion: shared.__Ktor_utilsMonth.Companion {
        return _ObjectiveCType.companion
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__Ktor_utilsMonth, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__Ktor_utilsMonth, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__Ktor_utilsMonth?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__Ktor_utilsMonth {
        switch self {
        case .january: return shared.__Ktor_utilsMonth.january as shared.__Ktor_utilsMonth
        case .february: return shared.__Ktor_utilsMonth.february as shared.__Ktor_utilsMonth
        case .march: return shared.__Ktor_utilsMonth.march as shared.__Ktor_utilsMonth
        case .april: return shared.__Ktor_utilsMonth.april as shared.__Ktor_utilsMonth
        case .may: return shared.__Ktor_utilsMonth.may as shared.__Ktor_utilsMonth
        case .june: return shared.__Ktor_utilsMonth.june as shared.__Ktor_utilsMonth
        case .july: return shared.__Ktor_utilsMonth.july as shared.__Ktor_utilsMonth
        case .august: return shared.__Ktor_utilsMonth.august as shared.__Ktor_utilsMonth
        case .september: return shared.__Ktor_utilsMonth.september as shared.__Ktor_utilsMonth
        case .october: return shared.__Ktor_utilsMonth.october as shared.__Ktor_utilsMonth
        case .november: return shared.__Ktor_utilsMonth.november as shared.__Ktor_utilsMonth
        case .december: return shared.__Ktor_utilsMonth.december as shared.__Ktor_utilsMonth
        }
    }

    private static func fromObjectiveC(_ source: shared.__Ktor_utilsMonth?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Ktor_utilsMonth") }
        if source == shared.__Ktor_utilsMonth.january as shared.__Ktor_utilsMonth {
            return .january
        } else if source == shared.__Ktor_utilsMonth.february as shared.__Ktor_utilsMonth {
            return .february
        } else if source == shared.__Ktor_utilsMonth.march as shared.__Ktor_utilsMonth {
            return .march
        } else if source == shared.__Ktor_utilsMonth.april as shared.__Ktor_utilsMonth {
            return .april
        } else if source == shared.__Ktor_utilsMonth.may as shared.__Ktor_utilsMonth {
            return .may
        } else if source == shared.__Ktor_utilsMonth.june as shared.__Ktor_utilsMonth {
            return .june
        } else if source == shared.__Ktor_utilsMonth.july as shared.__Ktor_utilsMonth {
            return .july
        } else if source == shared.__Ktor_utilsMonth.august as shared.__Ktor_utilsMonth {
            return .august
        } else if source == shared.__Ktor_utilsMonth.september as shared.__Ktor_utilsMonth {
            return .september
        } else if source == shared.__Ktor_utilsMonth.october as shared.__Ktor_utilsMonth {
            return .october
        } else if source == shared.__Ktor_utilsMonth.november as shared.__Ktor_utilsMonth {
            return .november
        } else if source == shared.__Ktor_utilsMonth.december as shared.__Ktor_utilsMonth {
            return .december
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Ktor_utilsMonth")
        }
    }

    public typealias _ObjectiveCType = shared.__Ktor_utilsMonth

    public typealias Companion = shared.__Ktor_utilsMonth.Companion

}

public extension shared.Ktor_utilsMonth {

    func toKotlinEnum() -> shared.__Ktor_utilsMonth {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__Ktor_utilsMonth {

    func toSwiftEnum() -> shared.Ktor_utilsMonth {
        return shared.Ktor_utilsMonth._unconditionallyBridgeFromObjectiveC(self)
    }

}
