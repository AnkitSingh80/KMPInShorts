import Foundation

public extension shared.Skie.KotlinxCoroutinesCore.SelectClause {

    @frozen
    enum __Sealed {

        case selectClause0(shared.Kotlinx_coroutines_coreSelectClause0)
        case selectClause1(shared.Kotlinx_coroutines_coreSelectClause1)
        case selectClause2(shared.Kotlinx_coroutines_coreSelectClause2)

    }

}

public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectClause>(of sealed: __Sealed) -> shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed {
    if let sealed = sealed as? shared.Kotlinx_coroutines_coreSelectClause0 {
        return shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed.selectClause0(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_coroutines_coreSelectClause1 {
        return shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed.selectClause1(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_coroutines_coreSelectClause2 {
        return shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed.selectClause2(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Kotlinx_coroutines_coreSelectClause is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_coroutines_coreSelectClause>(of sealed: __Sealed?) -> shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxCoroutinesCore.SelectClause.__Sealed
    } else {
        return nil
    }
}
