package com.petros.efthymiou.dailypulse.database

import kotlinx.serialization.Serializable

@Serializable
data class News(
    var wu: String,
    val date: String,
    val image: String,
    val title: String,
    val timeInMills: Long
)