package com.petros.efthymiou.dailypulse.articles

import com.petros.efthymiou.dailypulse.model.NewsResponse
import com.petros.efthymiou.dailypulse.model.Response
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.request.*

class ArticlesService(private val httpClient: HttpClient) {

    suspend fun fetchArticles(pageNo: Int): Response {
        var url = ""
        when (pageNo) {
            1 -> {
                url = "https://api.npoint.io/3bd9a7e496171990dde2"
            }
            2 -> {
                url = "https://api.npoint.io/41fcafb69898e9c48cff"
            }
            3 -> {
                url = "https://api.npoint.io/749f63b415114911b35e"
            }
        }
        val response: NewsResponse =
            httpClient.get(url) {
                headers {
                    append("platform", "android")
                    append("fv", "1")
                    append("lang", "en")
                }
            }.body()
        return response.response
    }
}


