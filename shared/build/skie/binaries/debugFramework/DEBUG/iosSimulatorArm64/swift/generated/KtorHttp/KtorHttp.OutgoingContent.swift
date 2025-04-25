import Foundation

public extension shared.Skie.KtorHttp.OutgoingContent {

    @frozen
    enum __Sealed : Swift.Hashable {

        case byteArrayContent(shared.Ktor_httpOutgoingContent.ByteArrayContent)
        case noContent(shared.Ktor_httpOutgoingContent.NoContent)
        case protocolUpgrade(shared.Ktor_httpOutgoingContent.ProtocolUpgrade)
        case readChannelContent(shared.Ktor_httpOutgoingContent.ReadChannelContent)
        case writeChannelContent(shared.Ktor_httpOutgoingContent.WriteChannelContent)

    }

}

public func onEnum<__Sealed : shared.Ktor_httpOutgoingContent>(of sealed: __Sealed) -> shared.Skie.KtorHttp.OutgoingContent.__Sealed {
    if let sealed = sealed as? shared.Ktor_httpOutgoingContent.ByteArrayContent {
        return shared.Skie.KtorHttp.OutgoingContent.__Sealed.byteArrayContent(sealed)
    } else if let sealed = sealed as? shared.Ktor_httpOutgoingContent.NoContent {
        return shared.Skie.KtorHttp.OutgoingContent.__Sealed.noContent(sealed)
    } else if let sealed = sealed as? shared.Ktor_httpOutgoingContent.ProtocolUpgrade {
        return shared.Skie.KtorHttp.OutgoingContent.__Sealed.protocolUpgrade(sealed)
    } else if let sealed = sealed as? shared.Ktor_httpOutgoingContent.ReadChannelContent {
        return shared.Skie.KtorHttp.OutgoingContent.__Sealed.readChannelContent(sealed)
    } else if let sealed = sealed as? shared.Ktor_httpOutgoingContent.WriteChannelContent {
        return shared.Skie.KtorHttp.OutgoingContent.__Sealed.writeChannelContent(sealed)
    } else {
        fatalError("Unknown subtype. This error should not happen under normal circumstances since SirClass: shared.Ktor_httpOutgoingContent is sealed.")
    }
}

@_disfavoredOverload
public func onEnum<__Sealed : shared.Ktor_httpOutgoingContent>(of sealed: __Sealed?) -> shared.Skie.KtorHttp.OutgoingContent.__Sealed? {
    if let sealed {
        return onEnum(of: sealed) as shared.Skie.KtorHttp.OutgoingContent.__Sealed
    } else {
        return nil
    }
}
