package com.example.shorts.articles

import com.example.shorts.database.News
import com.example.shorts.viewmodel.BaseViewModel
import com.example.shorts.DatabaseHelper
import comexampleshortssqldelight.Notification
import io.ktor.client.HttpClient
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.flow.Flow

class ArticlesViewModel(
    private val repository: ArticlesRepository
) : BaseViewModel() {

    private val _articlesState = MutableStateFlow(ArticlesState(loading = true))
    val articlesState: StateFlow<ArticlesState> = _articlesState

    private var currentPage = 1

    init {
        getArticles()
        insertSampleNotification()
    }

    private fun insertSampleNotification() {
        val news = News(
            wu = "some-wu",
            date = "2025-04-10",
            image = "https://static.sociofyme.com/photo/msid-151403580,imgsize-37904,updatedat-1744437990971,width-402,height-226,resizemode-75/151403580.jpg",
            title = "Fetched the title using SQLDelight’s offline storage.",
            timeInMills = 1234567890
        )
        repository.insertNotification(news)
    }

    fun insertNotification(news: News) {
        repository.insertNotification(news)
    }

    fun fetchAllNotifications(): Flow<List<Notification>> {
        return repository.getAllNotifications()
    }

    suspend fun fetchNotificationIos(): List<News> {
        return repository.getAllNotificationsOnce()
    }

    private fun getArticles() {
        scope.launch {
            val articles = repository.getArticles(currentPage)
            _articlesState.emit(ArticlesState(articles = articles))
        }
    }

    fun loadNextPageApi() {
        if (currentPage < 4) {
            scope.launch {
                val articles = repository.getArticles(++currentPage)
                val combined = _articlesState.value.articles + articles
                _articlesState.emit(ArticlesState(articles = combined))
            }
        }
    }

    fun getDummyWeb(): List<WebStory> {
        return repository.getDummyWebStories()
    }
}
