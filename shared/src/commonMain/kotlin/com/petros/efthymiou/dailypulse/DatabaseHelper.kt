package com.petros.efthymiou.dailypulse

import com.petros.efthymiou.dailypulse.articles.Article
import com.petros.efthymiou.dailypulse.database.DatabaseDriverFactory
import com.petros.efthymiou.dailypulse.database.News
import com.petros.efthymiou.dailypulse.sqldelight.AppDatabase
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import com.squareup.sqldelight.runtime.coroutines.asFlow
import competrosefthymioudailypulsesqldelight.Notification

class DatabaseHelper(databaseDriverFactory: DatabaseDriverFactory) {
    private val database = AppDatabase(databaseDriverFactory.createDriver())
    private val dbQuery = database.appDatabaseQueries

    fun getAllArticles(): Flow<List<Notification>> {
        return dbQuery.selectAll().asFlow().map { it.executeAsList() }
    }

    fun insertArticle(news: News) {
        news.run {
            dbQuery.insertArticle(title, wu, image, timeInMills)
        }
    }
}
