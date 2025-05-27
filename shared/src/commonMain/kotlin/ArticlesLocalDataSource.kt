import com.example.shorts.database.News
import comexampleshortssqldelight.Notification
import kotlinx.coroutines.flow.Flow

interface ArticlesLocalDataSource {
    fun getAllArticles(): Flow<List<Notification>>
    fun insertArticle(news: News)
}
