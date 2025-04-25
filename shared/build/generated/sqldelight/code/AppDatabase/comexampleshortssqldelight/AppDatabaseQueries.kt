package comexampleshortssqldelight

import com.squareup.sqldelight.Query
import com.squareup.sqldelight.Transacter
import kotlin.Any
import kotlin.Long
import kotlin.String
import kotlin.Unit

public interface AppDatabaseQueries : Transacter {
  public fun <T : Any> selectAll(mapper: (
    id: Long,
    title: String,
    wu: String,
    image: String,
    date: String,
    milliSeconds: Long
  ) -> T): Query<T>

  public fun selectAll(): Query<Notification>

  public fun insertArticle(
    title: String,
    wu: String,
    image: String,
    date: String,
    milliSeconds: Long
  ): Unit
}
