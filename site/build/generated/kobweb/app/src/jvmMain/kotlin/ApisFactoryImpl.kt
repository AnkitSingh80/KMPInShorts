import com.varabyte.kobweb.api.Apis
import com.varabyte.kobweb.api.ApisFactory
import com.varabyte.kobweb.api.`data`.MutableData
import com.varabyte.kobweb.api.`init`.InitApiContext
import com.varabyte.kobweb.api.env.Environment
import com.varabyte.kobweb.api.event.Events
import com.varabyte.kobweb.api.log.Logger

public class ApisFactoryImpl : ApisFactory {
    override fun create(
        env: Environment,
        events: Events,
        logger: Logger,
    ): Apis {
        val data = MutableData()
        val apis = Apis(env, data, logger)
        apis.register("/checkuserid") { ctx -> com.exmaple.blogmultiplatform.api.checkUserId(ctx) }
        apis.register("/usercheck") { ctx -> com.exmaple.blogmultiplatform.api.userCheck(ctx) }
        val initCtx = InitApiContext(env, apis, data, events, logger)
        com.exmaple.blogmultiplatform.models.initMongoDB(initCtx)

        return apis
    }
}
