package com.petros.efthymiou.dailypulse.articles

import com.petros.efthymiou.dailypulse.model.NewsResponse
import com.petros.efthymiou.dailypulse.model.Response
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.*

class ArticlesService(private val httpClient: HttpClient) {

    suspend fun fetchArticles(): Response {
        val response: NewsResponse =
            httpClient.get("https://tnapp.tnn.in/request/getShortListData") {
                headers {
                    append("platform", "android")
                    append("fv", "1")
                    append("lang", "en")
                }
            }.body()
        return response.response
    }
}


