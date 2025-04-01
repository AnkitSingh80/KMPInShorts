package com.petros.efthymiou.dailypulse.articles

data class Article(
    val tn: String,
    val title: String,
    val desc: String,
    val date: String,
    val wu: String,
    val imageUrl: String,
    val list: List<WebStory>
)

