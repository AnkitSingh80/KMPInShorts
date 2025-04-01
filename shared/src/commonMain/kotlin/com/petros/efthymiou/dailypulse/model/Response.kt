package com.petros.efthymiou.dailypulse.model

import com.petros.efthymiou.dailypulse.model.ItemsItem
import com.petros.efthymiou.dailypulse.model.Pagination
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Response(
    @SerialName("pagination")
    val pagination: Pagination? = null,

    @SerialName("items")
    val items: List<ItemsItem>
)