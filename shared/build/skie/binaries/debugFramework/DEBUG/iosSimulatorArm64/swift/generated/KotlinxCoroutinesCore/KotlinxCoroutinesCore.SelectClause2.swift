import Foundation

public extension shared.Skie.KotlinxCoroutinesCore.SelectClause2 {

    @frozen
    enum __Sealed : Swift.Hashable {

        case `else`

    }

}

public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectClause2>(of sealed: __Sealed) -> shared.Skie.KotlinxCoroutinesCore.SelectClause2.__Sealed {
    return shared.Skie.KotlinxCoroutinesCore.SelectClause2.__Sealed.`else`
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectClause2>(of sealed: __Sealed?) -> shared.Skie.KotlinxCoroutinesCore.SelectClause2.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxCoroutinesCore.SelectClause2.__Sealed
    } else {
        return nil
    }
}
