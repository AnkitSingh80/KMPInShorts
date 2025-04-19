package com.example.shorts.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ItemsItem(

    @SerialName("su")
    val su: String? = null,

    @SerialName("hl")
    val hl: String? = null,

    @SerialName("author")
    val author: Author? = null,

    @SerialName("dl")
    val dl: Long? = null,

    @SerialName("upd")
    val upd: String? = null,

    @SerialName("caption")
    val caption: String? = null,

    @SerialName("hostid")
    val hostid: Int? = null,

    @SerialName("lpt")
    val lpt: Long? = null,

    @SerialName("msid")
    val msid: Int? = null,

    @SerialName("children")
    val children: List<ChildrenItem?>? = null,

    @SerialName("imageUrl")
    val imageUrl: String? = null,

    @SerialName("tn")
    val tn: String? = null,

    @SerialName("wu")
    val wu: String? = null
)
