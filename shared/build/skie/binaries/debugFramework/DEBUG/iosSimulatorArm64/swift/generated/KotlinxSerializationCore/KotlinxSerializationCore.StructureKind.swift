import Foundation

public extension shared.Skie.KotlinxSerializationCore.StructureKind {

    @frozen
    enum __Sealed : Swift.Hashable {

        case cLASS(shared.Kotlinx_serialization_coreStructureKind.CLASS)
        case lIST(shared.Kotlinx_serialization_coreStructureKind.LIST)
        case mAP(shared.Kotlinx_serialization_coreStructureKind.MAP)
        case oBJECT(shared.Kotlinx_serialization_coreStructureKind.OBJECT)

    }

}

public func onEnum<__Sealed : shared.Kotlinx_serialization_coreStructureKind>(of sealed: __Sealed) -> shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed {
    if let sealed = sealed as? shared.Kotlinx_serialization_coreStructureKind.CLASS {
        return shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed.cLASS(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreStructureKind.LIST {
        return shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed.lIST(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreStructureKind.MAP {
        return shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed.mAP(sealed)
    } else if let sealed = sealed as? shared.Kotlinx_serialization_coreStructureKind.OBJECT {
        return shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed.oBJECT(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Kotlinx_serialization_coreStructureKind is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Kotlinx_serialization_coreStructureKind>(of sealed: __Sealed?) -> shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KotlinxSerializationCore.StructureKind.__Sealed
    } else {
        return nil
    }
}
