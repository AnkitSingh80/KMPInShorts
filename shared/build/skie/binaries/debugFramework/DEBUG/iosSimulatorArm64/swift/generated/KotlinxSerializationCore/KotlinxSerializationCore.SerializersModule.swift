import Foundation

public extension shared.Skie.KotlinxSerializationCore.SerializersModule {

    @frozen
    enum __Sealed : Swift.Hashable {

        case `else`

    }

}

public func onEnum<__Sealed : shared.Kotlinx_serialization_coreSerializersModule>(of sealed: __Sealed) -> shared.Skie.KotlinxSerializationCore.SerializersModule.__Sealed {
    return shared.Skie.KotlinxSerializationCore.SerializersModule.__Sealed.`else`
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_serialization_coreSerializersModule>(of sealed: __Sealed?) -> shared.Skie.KotlinxSerializationCore.SerializersModule.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxSerializationCore.SerializersModule.__Sealed
    } else {
        return nil
    }
}
