package com.petros.efthymiou.dailypulse.articles

import com.petros.efthymiou.dailypulse.model.ChildrenItem
import com.petros.efthymiou.dailypulse.model.Response
import kotlinx.datetime.Instant
import kotlinx.datetime.TimeZone
import kotlinx.datetime.toLocalDateTime

class ArticlesUseCase(private val service: ArticlesService) {

    suspend fun getArticles(): List<Article>{
        val articlesRaw = service.fetchArticles()
        return mapArticles(articlesRaw)
    }

    private fun mapArticles(articlesRaw: Response): List<Article> =
        articlesRaw.items.map {  raw ->
            Article(
                tn = raw.tn ?:"",
                wu = raw.wu ?: "",
                title = raw.hl ?:"",
                desc = raw.caption ?: "Click to find out more",
                date = raw.upd ?:"",
                list = mapWebStories(raw.children),
                imageUrl = raw.imageUrl
                    ?: "https://image.cnbcfm.com/api/v1/image/107326078-1698758530118-gettyimages-1765623456-wall26362_igj6ehhp.jpeg?v=1698758587&w=1920&h=1080"
            )
        }

    private fun mapWebStories(children: List<ChildrenItem?>?): List<WebStory> {
        return children?.mapIndexed { index, it ->
            WebStory(
                wu = it?.wu ?: "",
                imageUrl = it?.imageUrl ?: "",
                date = formatMillisToDate(it?.dl ?:0L),
                title = it?.hl ?: "",
                desc = it?.caption ?: "",
                imageNo = index + 1
            )
        } ?: emptyList()
    }


    private fun formatMillisToDate(millis: Long): String {
        val instant = Instant.fromEpochMilliseconds(millis)
        val dateTime = instant.toLocalDateTime(TimeZone.currentSystemDefault())
        val month = dateTime.month.name.take(3).lowercase().replaceFirstChar { it.uppercase() } // e.g. Apr
        val day = dateTime.dayOfMonth.toString().padStart(2, '0') // e.g. 08
        val year = dateTime.year
        return "$month $day, $year"
    }

}
