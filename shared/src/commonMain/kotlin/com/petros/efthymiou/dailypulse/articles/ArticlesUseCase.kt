package com.petros.efthymiou.dailypulse.articles

import com.petros.efthymiou.dailypulse.model.ChildrenItem
import com.petros.efthymiou.dailypulse.model.Response

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
        return children?.map {
            WebStory(
                wu = it?.wu ?: "",
                imageUrl = it?.imageUrl ?: "",
                date = "March 29, 2025",
                title = it?.hl ?: "",
                desc = it?.caption ?: ""
            )
        } ?: emptyList()
    }
}
