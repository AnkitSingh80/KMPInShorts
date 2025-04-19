package com.example.shorts.articles

import com.example.shorts.articles.Article

data class ArticlesState(
    val articles: List<Article> = listOf(),
    val loading: Boolean = false,
    val error: String? = null
)

