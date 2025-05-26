package com.example.shorts.articles

import com.example.shorts.database.News
import comexampleshortssqldelight.Notification
import kotlinx.coroutines.flow.Flow

interface ArticlesRepository {
    suspend fun getArticles(page: Int): List<Article>
    fun getAllNotifications(): Flow<List<Notification>>
    suspend fun getAllNotificationsOnce(): List<News>
    fun insertNotification(news: News)
    fun getDummyWebStories(): List<WebStory>
}
