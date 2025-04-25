import Foundation

public func SkieKotlinFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftFlow<T>) -> shared.SkieKotlinFlow<T> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinFlow<T> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinFlow<T> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinFlow<T> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinFlow<T> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftFlow<T>) -> shared.SkieKotlinFlow<T._ObjectiveCType> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinFlow<T._ObjectiveCType> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinFlow<T._ObjectiveCType> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinFlow<T._ObjectiveCType> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public func SkieKotlinFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinFlow<T._ObjectiveCType> {
    return shared.SkieKotlinFlow(flow.delegate)
}

public extension shared.SkieSwiftFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public func SkieKotlinOptionalFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalFlow(flow.delegate)
}

public extension shared.SkieSwiftOptionalFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftOptionalFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinSharedFlow<T> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinSharedFlow<T> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinSharedFlow<T> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinSharedFlow<T> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public func SkieKotlinSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinSharedFlow(flow.delegate)
}

public extension shared.SkieSwiftSharedFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftSharedFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalSharedFlow(flow.delegate)
}

public extension shared.SkieSwiftOptionalSharedFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftOptionalSharedFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinMutableSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinMutableSharedFlow<T> {
    return shared.SkieKotlinMutableSharedFlow(flow.delegate)
}

public func SkieKotlinMutableSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinMutableSharedFlow(flow.delegate)
}

public extension shared.SkieSwiftMutableSharedFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftMutableSharedFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinOptionalMutableSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalMutableSharedFlow<T> {
    return shared.SkieKotlinOptionalMutableSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableSharedFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalMutableSharedFlow<T> {
    return shared.SkieKotlinOptionalMutableSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableSharedFlow<T>) -> shared.SkieKotlinOptionalMutableSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalMutableSharedFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableSharedFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) -> shared.SkieKotlinOptionalMutableSharedFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalMutableSharedFlow(flow.delegate)
}

public extension shared.SkieSwiftOptionalMutableSharedFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftOptionalMutableSharedFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableSharedFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinStateFlow<T> {
    return shared.SkieKotlinStateFlow(flow.delegate)
}

public func SkieKotlinStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinStateFlow<T> {
    return shared.SkieKotlinStateFlow(flow.delegate)
}

public func SkieKotlinStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinStateFlow(flow.delegate)
}

public func SkieKotlinStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinStateFlow(flow.delegate)
}

public extension shared.SkieSwiftStateFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftStateFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinOptionalStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public func SkieKotlinOptionalStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalStateFlow(flow.delegate)
}

public extension shared.SkieSwiftOptionalStateFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftOptionalStateFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinMutableStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinMutableStateFlow<T> {
    return shared.SkieKotlinMutableStateFlow(flow.delegate)
}

public func SkieKotlinMutableStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinMutableStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinMutableStateFlow(flow.delegate)
}

public extension shared.SkieSwiftMutableStateFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftMutableStateFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public func SkieKotlinOptionalMutableStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalMutableStateFlow<T> {
    return shared.SkieKotlinOptionalMutableStateFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableStateFlow<T : Swift.AnyObject>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalMutableStateFlow<T> {
    return shared.SkieKotlinOptionalMutableStateFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftMutableStateFlow<T>) -> shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalMutableStateFlow(flow.delegate)
}

public func SkieKotlinOptionalMutableStateFlow<T : Swift._ObjectiveCBridgeable>(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) -> shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType> {
    return shared.SkieKotlinOptionalMutableStateFlow(flow.delegate)
}

public extension shared.SkieSwiftOptionalMutableStateFlow where T : Swift.AnyObject {

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}

public extension shared.SkieSwiftOptionalMutableStateFlow where T : Swift._ObjectiveCBridgeable {

    convenience init(_ flow: shared.SkieKotlinMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieKotlinOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T._ObjectiveCType>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

    convenience init(_ flow: shared.SkieSwiftOptionalMutableStateFlow<T>) {
        self.init(internal: flow.delegate)
    }

}
