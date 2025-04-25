package com.example.shorts.sqldelight.shared

import com.example.shorts.sqldelight.AppDatabase
import com.squareup.sqldelight.Query
import com.squareup.sqldelight.TransacterImpl
import com.squareup.sqldelight.`internal`.copyOnWriteList
import com.squareup.sqldelight.db.SqlDriver
import comexampleshortssqldelight.AppDatabaseQueries
import comexampleshortssqldelight.Notification
import kotlin.Any
import kotlin.Int
import kotlin.Long
import kotlin.String
import kotlin.Unit
import kotlin.collections.MutableList
import kotlin.reflect.KClass

internal val KClass<AppDatabase>.schema: SqlDriver.Schema
  get() = AppDatabaseImpl.Schema

internal fun KClass<AppDatabase>.newInstance(driver: SqlDriver): AppDatabase =
    AppDatabaseImpl(driver)

private class AppDatabaseImpl(
  driver: SqlDriver
) : TransacterImpl(driver), AppDatabase {
  public override val appDatabaseQueries: AppDatabaseQueriesImpl = AppDatabaseQueriesImpl(this,
      driver)

  public object Schema : SqlDriver.Schema {
    public override val version: Int
      get() = 1

    public override fun create(driver: SqlDriver): Unit {
      driver.execute(null, """
          |CREATE TABLE Notification (
          |id INTEGER PRIMARY KEY AUTOINCREMENT,
          |title TEXT NOT NULL,
          |wu TEXT NOT NULL,
          |image TEXT NOT NULL,
          |date TEXT NOT NULL,
          |milliSeconds INTEGER NOT NULL
          |)
          """.trimMargin(), 0)
    }

    public override fun migrate(
      driver: SqlDriver,
      oldVersion: Int,
      newVersion: Int
    ): Unit {
    }
  }
}

private class AppDatabaseQueriesImpl(
  private val database: AppDatabaseImpl,
  private val driver: SqlDriver
) : TransacterImpl(driver), AppDatabaseQueries {
  internal val selectAll: MutableList<Query<*>> = copyOnWriteList()

  public override fun <T : Any> selectAll(mapper: (
    id: Long,
    title: String,
    wu: String,
    image: String,
    date: String,
    milliSeconds: Long
  ) -> T): Query<T> = Query(-1764426258, selectAll, driver, "AppDatabase.sq", "selectAll",
      "SELECT * FROM Notification") { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getString(1)!!,
      cursor.getString(2)!!,
      cursor.getString(3)!!,
      cursor.getString(4)!!,
      cursor.getLong(5)!!
    )
  }

  public override fun selectAll(): Query<Notification> = selectAll { id, title, wu, image, date,
      milliSeconds ->
    Notification(
      id,
      title,
      wu,
      image,
      date,
      milliSeconds
    )
  }

  public override fun insertArticle(
    title: String,
    wu: String,
    image: String,
    date: String,
    milliSeconds: Long
  ): Unit {
    driver.execute(-932489626,
        """INSERT INTO Notification (title, wu, image, date, milliSeconds) VALUES (?, ?, ?, ?, ?)""",
        5) {
      bindString(1, title)
      bindString(2, wu)
      bindString(3, image)
      bindString(4, date)
      bindLong(5, milliSeconds)
    }
    notifyQueries(-932489626, {database.appDatabaseQueries.selectAll})
  }
}
