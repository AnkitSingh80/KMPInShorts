import Foundation

public extension shared.Skie.KotlinxSerializationCore.SerialKind {

    @frozen
    enum __Sealed : Swift.Hashable {

        case polymorphicKind(shared.Kotlinx_serialization_corePolymorphicKind)
        case primitiveKind(shared.Kotlinx_serialization_corePrimitiveKind)
        case cONTEXTUAL(shared.Kotlinx_serialization_coreSerialKind.CONTEXTUAL)
        case eNUM(shared.Kotlinx_serialization_coreSerialKind.ENUM)
        case structureKind(shared.Kotlinx_serialization_coreStructureKind)

    }

}

public func onEnum<__Sealed : shared.Kotlinx_serialization_coreSerialKind>(of sealed: __Sealed) -> shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed {
    if let sealed = sealed as? shared.Kotlinx_serialization_corePolymorphicKind {
        return shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed.polymorphicKind(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind {
        return shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed.primitiveKind(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreSerialKind.CONTEXTUAL {
        return shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed.cONTEXTUAL(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreSerialKind.ENUM {
        return shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed.eNUM(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreStructureKind {
        return shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed.structureKind(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Kotlinx_serialization_coreSerialKind is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_serialization_coreSerialKind>(of sealed: __Sealed?) -> shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxSerializationCore.SerialKind.__Sealed
    } else {
        return nil
    }
}
