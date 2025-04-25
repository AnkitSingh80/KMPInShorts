import Foundation

public extension shared.Skie.KotlinxSerializationCore.PolymorphicKind {

    @frozen
    enum __Sealed : Swift.Hashable {

        case oPEN(shared.Kotlinx_serialization_corePolymorphicKind.OPEN)
        case sEALED(shared.Kotlinx_serialization_corePolymorphicKind.SEALED)

    }

}

public func onEnum<__Sealed : shared.Kotlinx_serialization_corePolymorphicKind>(of sealed: __Sealed) -> shared.Skie.KotlinxSerializationCore.PolymorphicKind.__Sealed {
    if let sealed = sealed as? shared.Kotlinx_serialization_corePolymorphicKind.OPEN {
        return shared.Skie.KotlinxSerializationCore.PolymorphicKind.__Sealed.oPEN(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePolymorphicKind.SEALED {
        return shared.Skie.KotlinxSerializationCore.PolymorphicKind.__Sealed.sEALED(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Kotlinx_serialization_corePolymorphicKind is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_serialization_corePolymorphicKind>(of sealed: __Sealed?) -> shared.Skie.KotlinxSerializationCore.PolymorphicKind.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxSerializationCore.PolymorphicKind.__Sealed
    } else {
        return nil
    }
}
