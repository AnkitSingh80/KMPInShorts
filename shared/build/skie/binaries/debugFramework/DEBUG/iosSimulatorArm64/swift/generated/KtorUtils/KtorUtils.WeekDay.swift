import Foundation

@frozen
public enum Ktor_utilsWeekDay : Swift.Hashable, Swift.CaseIterable, Swift._ObjectiveCBridgeable {

    case monday
    case tuesday
    case wednesday
    case thursday
    case friday
    case saturday
    case sunday

    public var name: Swift.String {
        return (self as _ObjectiveCType).name
    }

    public var ordinal: Swift.Int32 {
        return (self as _ObjectiveCType).ordinal
    }

    public var value: Swift.String {
        return (self as _ObjectiveCType).value
    }

    public static var companion: shared.__Ktor_utilsWeekDay.Companion {
        return _ObjectiveCType.companion
    }

    public static func _forceBridgeFromObjectiveC(_ source: shared.__Ktor_utilsWeekDay, result: inout Self?) {
        result = fromObjectiveC(source)
    }

    public static func _conditionallyBridgeFromObjectiveC(_ source: shared.__Ktor_utilsWeekDay, result: inout Self?) -> Swift.Bool {
        result = fromObjectiveC(source)
        return true
    }

    public static func _unconditionallyBridgeFromObjectiveC(_ source: shared.__Ktor_utilsWeekDay?) -> Self {
        return fromObjectiveC(source)
    }

    public func _bridgeToObjectiveC() -> shared.__Ktor_utilsWeekDay {
        switch self {
        case .monday: return shared.__Ktor_utilsWeekDay.monday as shared.__Ktor_utilsWeekDay
        case .tuesday: return shared.__Ktor_utilsWeekDay.tuesday as shared.__Ktor_utilsWeekDay
        case .wednesday: return shared.__Ktor_utilsWeekDay.wednesday as shared.__Ktor_utilsWeekDay
        case .thursday: return shared.__Ktor_utilsWeekDay.thursday as shared.__Ktor_utilsWeekDay
        case .friday: return shared.__Ktor_utilsWeekDay.friday as shared.__Ktor_utilsWeekDay
        case .saturday: return shared.__Ktor_utilsWeekDay.saturday as shared.__Ktor_utilsWeekDay
        case .sunday: return shared.__Ktor_utilsWeekDay.sunday as shared.__Ktor_utilsWeekDay
        }
    }

    private static func fromObjectiveC(_ source: shared.__Ktor_utilsWeekDay?) -> Self {
        guard let source = source else { fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Ktor_utilsWeekDay") }
        if source == shared.__Ktor_utilsWeekDay.monday as shared.__Ktor_utilsWeekDay {
            return .monday
        } else if source == shared.__Ktor_utilsWeekDay.tuesday as shared.__Ktor_utilsWeekDay {
            return .tuesday
        } else if source == shared.__Ktor_utilsWeekDay.wednesday as shared.__Ktor_utilsWeekDay {
            return .wednesday
        } else if source == shared.__Ktor_utilsWeekDay.thursday as shared.__Ktor_utilsWeekDay {
            return .thursday
        } else if source == shared.__Ktor_utilsWeekDay.friday as shared.__Ktor_utilsWeekDay {
            return .friday
        } else if source == shared.__Ktor_utilsWeekDay.saturday as shared.__Ktor_utilsWeekDay {
            return .saturday
        } else if source == shared.__Ktor_utilsWeekDay.sunday as shared.__Ktor_utilsWeekDay {
            return .sunday
        } else {
            fatalError("Couldn't map value of \(Swift.String(describing: source)) to shared.__Ktor_utilsWeekDay")
        }
    }

    public typealias _ObjectiveCType = shared.__Ktor_utilsWeekDay

    public typealias Companion = shared.__Ktor_utilsWeekDay.Companion

}

public extension shared.Ktor_utilsWeekDay {

    func toKotlinEnum() -> shared.__Ktor_utilsWeekDay {
        return _bridgeToObjectiveC()
    }

}

public extension shared.__Ktor_utilsWeekDay {

    func toSwiftEnum() -> shared.Ktor_utilsWeekDay {
        return shared.Ktor_utilsWeekDay._unconditionallyBridgeFromObjectiveC(self)
    }

}
