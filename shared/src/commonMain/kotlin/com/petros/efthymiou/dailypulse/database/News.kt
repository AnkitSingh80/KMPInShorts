package com.petros.efthymiou.dailypulse.database

data class News(
    val wu: String,
    val date: String,
    val image: String,
    val title: String,
    val timeInMills: Long
)