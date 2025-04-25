package comexampleshortssqldelight

import kotlin.Long
import kotlin.String

public data class Notification(
  public val id: Long,
  public val title: String,
  public val wu: String,
  public val image: String,
  public val date: String,
  public val milliSeconds: Long
) {
  public override fun toString(): String = """
  |Notification [
  |  id: $id
  |  title: $title
  |  wu: $wu
  |  image: $image
  |  date: $date
  |  milliSeconds: $milliSeconds
  |]
  """.trimMargin()
}
