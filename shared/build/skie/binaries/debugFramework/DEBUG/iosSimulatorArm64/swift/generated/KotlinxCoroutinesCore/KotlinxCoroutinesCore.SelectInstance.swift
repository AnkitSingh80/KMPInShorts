import Foundation

public extension shared.Skie.KotlinxCoroutinesCore.SelectInstance {

    @frozen
    enum __Sealed : Swift.Hashable {

        case `else`

    }

}

public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectInstance>(of sealed: __Sealed) -> shared.Skie.KotlinxCoroutinesCore.SelectInstance.__Sealed {
    return shared.Skie.KotlinxCoroutinesCore.SelectInstance.__Sealed.`else`
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectInstance>(of sealed: __Sealed?) -> shared.Skie.KotlinxCoroutinesCore.SelectInstance.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxCoroutinesCore.SelectInstance.__Sealed
    } else {
        return nil
    }
}
