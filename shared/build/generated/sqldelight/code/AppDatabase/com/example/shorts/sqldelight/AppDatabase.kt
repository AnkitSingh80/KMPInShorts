package com.example.shorts.sqldelight

import com.example.shorts.sqldelight.shared.newInstance
import com.example.shorts.sqldelight.shared.schema
import com.squareup.sqldelight.Transacter
import com.squareup.sqldelight.db.SqlDriver
import comexampleshortssqldelight.AppDatabaseQueries

public interface AppDatabase : Transacter {
  public val appDatabaseQueries: AppDatabaseQueries

  public companion object {
    public val Schema: SqlDriver.Schema
      get() = AppDatabase::class.schema

    public operator fun invoke(driver: SqlDriver): AppDatabase =
        AppDatabase::class.newInstance(driver)
  }
}
