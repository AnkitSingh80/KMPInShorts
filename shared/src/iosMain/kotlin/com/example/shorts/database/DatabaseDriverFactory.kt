package com.example.shorts.database

import com.example.shorts.sqldelight.AppDatabase
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.drivers.native.NativeSqliteDriver

actual class DatabaseDriverFactory {
     actual fun createDriver(): SqlDriver {
          return NativeSqliteDriver(AppDatabase.Schema, "app.db")
     }
}
