import com.example.shorts.database.News
import comexampleshortssqldelight.Notification

class FakeArticlesLocalDataSource : ArticlesLocalDataSource {

    private val articles = mutableListOf<Notification>()

    override fun getAllArticles(): Flow<List<Notification>> = flow {
        emit(articles.toList())
    }

    override fun insertArticle(news: News) {
        val notification = Notification(
            id = 0L,
            title = news.title,
            wu = news.wu,
            image = news.image,
            date = news.date,
            milliSeconds = news.timeInMills
        )
        articles.add(notification)
    }
}
