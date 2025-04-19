package com.example.shorts.model

import com.example.shorts.model.ItemsItem
import com.example.shorts.model.Pagination
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Response(
    @SerialName("pagination")
    val pagination: Pagination? = null,

    @SerialName("items")
    val items: List<ItemsItem>
)