package com.example.newsapp.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable


@Serializable
data class Author(

    @SerialName("imageUrl")
    val imageUrl: String? = null,

    @SerialName("name")
    val name: String? = null,

    @SerialName("authorId")
    val authorId: String? = null
)