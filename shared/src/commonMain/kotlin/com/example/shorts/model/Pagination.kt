package com.example.shorts.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Pagination(

    @SerialName("totalItems")
    val totalItems: Int? = null,

    @SerialName("perPage")
    val perPage: Int? = null,

    @SerialName("curPage")
    val curPage: Int? = null,

    @SerialName("totalPages")
    val totalPages: Int? = null
)
