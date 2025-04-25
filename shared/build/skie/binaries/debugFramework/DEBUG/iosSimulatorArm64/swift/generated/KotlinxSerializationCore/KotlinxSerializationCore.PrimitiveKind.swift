import Foundation

public extension shared.Skie.KotlinxSerializationCore.PrimitiveKind {

    @frozen
    enum __Sealed : Swift.Hashable {

        case bOOLEAN(shared.Kotlinx_serialization_corePrimitiveKind.BOOLEAN)
        case bYTE(shared.Kotlinx_serialization_corePrimitiveKind.BYTE)
        case cHAR(shared.Kotlinx_serialization_corePrimitiveKind.CHAR)
        case dOUBLE(shared.Kotlinx_serialization_corePrimitiveKind.DOUBLE)
        case fLOAT(shared.Kotlinx_serialization_corePrimitiveKind.FLOAT)
        case iNT(shared.Kotlinx_serialization_corePrimitiveKind.INT)
        case lONG(shared.Kotlinx_serialization_corePrimitiveKind.LONG)
        case sHORT(shared.Kotlinx_serialization_corePrimitiveKind.SHORT)
        case sTRING(shared.Kotlinx_serialization_corePrimitiveKind.STRING)

    }

}

public func onEnum<__Sealed : shared.Kotlinx_serialization_corePrimitiveKind>(of sealed: __Sealed) -> shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed {
    if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.BOOLEAN {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.bOOLEAN(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.BYTE {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.bYTE(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.CHAR {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.cHAR(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.DOUBLE {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.dOUBLE(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.FLOAT {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.fLOAT(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.INT {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.iNT(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.LONG {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.lONG(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.SHORT {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.sHORT(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_corePrimitiveKind.STRING {
        return shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed.sTRING(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Kotlinx_serialization_corePrimitiveKind is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_serialization_corePrimitiveKind>(of sealed: __Sealed?) -> shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxSerializationCore.PrimitiveKind.__Sealed
    } else {
        return nil
    }
}
