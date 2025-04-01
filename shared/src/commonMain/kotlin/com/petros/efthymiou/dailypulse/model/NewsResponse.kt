package com.petros.efthymiou.dailypulse.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class NewsResponse(

	@SerialName("response")
	val response: Response,

	@SerialName("status")
	val status: Boolean? = null,
)

