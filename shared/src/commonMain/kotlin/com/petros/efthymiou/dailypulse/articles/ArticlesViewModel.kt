package com.petros.efthymiou.dailypulse.articles

import com.petros.efthymiou.dailypulse.DatabaseHelper
import com.petros.efthymiou.dailypulse.database.News
import com.petros.efthymiou.dailypulse.viewmodel.BaseViewModel
import competrosefthymioudailypulsesqldelight.Notification
import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.serialization.kotlinx.json.json
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.flow.Flow
import kotlinx.serialization.json.Json


class ArticlesViewModel(private val dbHelper: DatabaseHelper) : BaseViewModel() {

    private val _articlesState: MutableStateFlow<ArticlesState> =
        MutableStateFlow(ArticlesState(loading = true))

    val articlesState: StateFlow<ArticlesState> get() = _articlesState

    private val useCase: ArticlesUseCase

    private var currentPage = 1

    init {
        val httpClient = HttpClient {
            install(ContentNegotiation) {
                json(Json {
                    prettyPrint = true
                    isLenient = true
                    ignoreUnknownKeys = true
                })
            }
        }

        val service = ArticlesService(httpClient)

        useCase = ArticlesUseCase(service)

        getArticles()
    }

     fun insertNotification(news: News){
        dbHelper.insertArticle(news)
    }

    fun fetchAllNotification(): Flow<List<Notification>>{
       return dbHelper.getAllArticles()
    }

    suspend fun fetchNotificationIos(): List<News>{
        return dbHelper.getAllArticles().first().map{
            it.toNews()
        }
    }

    private fun getArticles() {
        scope.launch {
            val fetchedArticles = useCase.getArticles(currentPage)
            _articlesState.emit(ArticlesState(articles = fetchedArticles))
        }
    }

    fun loadNextPageApi(){
        scope.launch {
            val fetchedArticles = useCase.getArticles(++currentPage)
            val currentList = _articlesState.value.articles
            val combinedList = currentList + fetchedArticles
            _articlesState.emit(ArticlesState(articles = combinedList))
        }
    }

    fun Notification.toNews(): News {
        return News(
            wu = wu,
            date = date,
            image = image,
            title = title,
            timeInMills = 0L
        )
    }

    fun getDummyWeb(): List<WebStory> {
        return useCase.dummyWebStories()
    }
}