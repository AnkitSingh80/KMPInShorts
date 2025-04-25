import com.varabyte.kobweb.worker.InputMessage
import com.varabyte.kobweb.worker.OutputDispatcher
import com.varabyte.kobweb.worker.Transferables
import kotlin.js.Json
import kotlin.js.json

private external val self: org.w3c.dom.DedicatedWorkerGlobalScope

fun main() {
    val factory = com.exmaple.blogmultiplatform.worker.EchoWorkerFactory()
    val ioSerializer = factory.createIOSerializer()
    val strategy = factory.createStrategy(object : OutputDispatcher<kotlin.String> {
        override fun invoke(output: kotlin.String, transferables: Transferables) {
            // If `IOSerializer` throws, that means the message was invalid. Ignore it.
            val outputSerialized = try {
                ioSerializer.serializeOutput(output)
            } catch (e: Throwable) {
                null
            }
            if (outputSerialized != null) {
                self.postMessage(
                    json("_output" to outputSerialized).add(transferables.toJson()),
                    transferables.toValues()
                )
            }
        }
    })
    self.onmessage = { e ->
        val json = e.data.unsafeCast<Json>()
        val inputDeserialized = try {
            ioSerializer.deserializeInput(json["_input"] as String)
        } catch (e: Throwable) {
            console.warn(buildString {
                append("Unable to deserialize input passed into worker, ignoring it.")
                e.message?.let { append("\nException: $it") }
            })
            null
        }
        if (inputDeserialized != null) {
            val transferables = Transferables.fromJson(json)
            strategy.onInput(InputMessage(inputDeserialized, transferables))
        }
    }
}