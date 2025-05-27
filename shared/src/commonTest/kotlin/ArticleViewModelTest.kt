@file:OptIn(ExperimentalCoroutinesApi::class)

import app.cash.turbine.test
import assertk.assertThat
import assertk.assertions.isEqualTo
import com.example.shorts.DatabaseHelper
import com.example.shorts.articles.ArticlesRepository
import com.example.shorts.articles.ArticlesRepositoryImpl
import com.example.shorts.articles.ArticlesService
import com.example.shorts.articles.ArticlesState
import com.example.shorts.articles.ArticlesViewModel
import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.http.HttpStatusCode
import io.ktor.http.headers
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.test.UnconfinedTestDispatcher
import kotlinx.coroutines.test.resetMain
import kotlinx.coroutines.test.setMain
import kotlin.test.AfterTest
import kotlin.test.BeforeTest
import kotlin.test.Test

class ArticleViewModelTest {

    private lateinit var httpClient: HttpClient
    private val testDispatcher = UnconfinedTestDispatcher()
    private lateinit var viewModel: ArticlesViewModel
    private lateinit var repository: ArticlesRepository
    private lateinit var articlesService: ArticlesService
    //private val mockDbHelper = mockk<DatabaseHelper>(relaxed = true)

    private var responseData = HttpResponseData(
        content = ArticleResponseData.valid,
        statusCode = HttpStatusCode.OK
    )


    @BeforeTest
    fun setUp() {
        Dispatchers.setMain(testDispatcher)
        httpClient = HttpClientFactory.create(
            engine = MockEngine.create {
                addHandler { request ->
                    val relativeUrl = request.url.encodedPath
                    when(relativeUrl) {
                        "/3bd9a7e496171990dde2" -> respond(
                            content = responseData.content,
                            status = responseData.statusCode,
                            headers = headers {
                                set("Content-Type", "application/json")
                            }
                        )
                        else -> respond(
                            content = "Not mocked",
                            status = HttpStatusCode.NotFound
                        )
                    }
                }
            }
        )

        articlesService = ArticlesService(httpClient)
       repository = ArticlesRepositoryImpl(FakeArticlesLocalDataSource(),articlesService, )
        viewModel = ArticlesViewModel(repository)
    }

    @AfterTest
    fun tearDown() {
        Dispatchers.resetMain()
    }


    @Test
    fun `Products are correctly loaded for successful API call`() = runBlocking {
        viewModel.articlesState.test {
            val initialEmission = awaitItem()
            assertThat(initialEmission).isEqualTo(ArticlesState(loading = true))


          //  val initialEmission = awaitItem()

        }
    }
}