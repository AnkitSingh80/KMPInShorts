package com.petros.efthymiou.dailypulse.model

import com.petros.efthymiou.dailypulse.model.Author
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ChildrenItem(

    @SerialName("lpt")
    val lpt: Long? = null,

    @SerialName("su")
    val su: String? = null,

    @SerialName("msid")
    val msid: Int? = null,

    @SerialName("hl")
    val hl: String? = null,

    @SerialName("author")
    val author: Author? = null,

    @SerialName("imageUrl")
    val imageUrl: String? = null,

    @SerialName("dl")
    val dl: Long? = null,

    @SerialName("upd")
    val upd: String? = null,

    @SerialName("caption")
    val caption: String? = null,

    @SerialName("hostid")
    val hostid: Int? = null,

    @SerialName("tn")
    val tn: String? = null,

    @SerialName("wu")
    val wu: String? = null
)