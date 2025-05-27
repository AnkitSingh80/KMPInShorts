package com.example.shorts

import ArticlesLocalDataSource
import com.example.shorts.database.DatabaseDriverFactory
import com.example.shorts.database.News
import com.example.shorts.sqldelight.AppDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import com.squareup.sqldelight.runtime.coroutines.asFlow
import comexampleshortssqldelight.Notification

class DatabaseHelper(databaseDriverFactory: DatabaseDriverFactory): ArticlesLocalDataSource {
    private val database = AppDatabase(databaseDriverFactory.createDriver())
    private val dbQuery = database.appDatabaseQueries

    override fun getAllArticles(): Flow<List<Notification>> {
        return dbQuery.selectAll().asFlow().map { it.executeAsList() }
    }

    override fun insertArticle(news: News) {
        news.run {
            dbQuery.insertArticle(title, wu, image, date, timeInMills)
        }
    }
}
