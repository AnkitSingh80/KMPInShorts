package com.example.newsapp.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Response(
    @SerialName("pagination")
    val pagination: Pagination? = null,

    @SerialName("items")
    val items: List<ItemsItem>
)