import Foundation

public extension shared.Skie.RuntimeKotlin.Skie_SuspendResult {

    @frozen
    enum __Sealed : Swift.Hashable {

        case canceled(shared.Skie_SuspendResult.Canceled)
        case error(shared.Skie_SuspendResult.Error)
        case success(shared.Skie_SuspendResult.Success)

    }

}

public func onEnum<__Sealed : shared.Skie_SuspendResult>(of sealed: __Sealed) -> shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed {
    if let sealed = sealed as? shared.Skie_SuspendResult.Canceled {
        return shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed.canceled(sealed)
    } else if let sealed = sealed as? shared.Skie_SuspendResult.Error {
        return shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed.error(sealed)
    } else if let sealed = sealed as? shared.Skie_SuspendResult.Success {
        return shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed.success(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Skie_SuspendResult is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Skie_SuspendResult>(of sealed: __Sealed?) -> shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.RuntimeKotlin.Skie_SuspendResult.__Sealed
    } else {
        return nil
    }
}
