package com.example.shorts.articles

import ArticlesLocalDataSource
import com.example.shorts.DatabaseHelper
import com.example.shorts.database.News
import comexampleshortssqldelight.Notification
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.first

class ArticlesRepositoryImpl(
    private val dbHelper: ArticlesLocalDataSource,
    private val service: ArticlesService
) : ArticlesRepository {

    override suspend fun getArticles(page: Int): List<Article> {
        return ArticlesUseCase(service).getArticles(page)
    }

    override fun getAllNotifications(): Flow<List<Notification>> {
        return dbHelper.getAllArticles()
    }

    override suspend fun getAllNotificationsOnce(): List<News> {
        return dbHelper.getAllArticles().first().map {
            it.toNews()
        }
    }

    override fun insertNotification(news: News) {
        dbHelper.insertArticle(news)
    }

    override fun getDummyWebStories(): List<WebStory> {
        return ArticlesUseCase(service).dummyWebStories()
    }

    private fun Notification.toNews(): News {
        return News(
            wu = wu,
            date = date,
            image = image,
            title = title,
            timeInMills = 0L
        )
    }
}
