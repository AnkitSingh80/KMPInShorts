package com.example.shorts

import com.example.shorts.database.DatabaseDriverFactory
import com.example.shorts.database.News
import com.example.shorts.sqldelight.AppDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import com.squareup.sqldelight.runtime.coroutines.asFlow
import comexampleshortssqldelight.Notification

class DatabaseHelper(databaseDriverFactory: DatabaseDriverFactory) {
    private val database = AppDatabase(databaseDriverFactory.createDriver())
    private val dbQuery = database.appDatabaseQueries

    fun getAllArticles(): Flow<List<Notification>> {
        return dbQuery.selectAll().asFlow().map { it.executeAsList() }
    }

    fun insertArticle(news: News) {
        news.run {
            dbQuery.insertArticle(title, wu, image, date, timeInMills)
        }
    }
}
