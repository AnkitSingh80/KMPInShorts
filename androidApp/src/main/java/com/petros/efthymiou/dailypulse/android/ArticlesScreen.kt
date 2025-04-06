package com.petros.efthymiou.dailypulse.android


import android.content.res.Resources
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.VerticalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Info
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.petros.efthymiou.dailypulse.articles.Article
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import com.petros.efthymiou.dailypulse.articles.WebStory

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun ArticlesScreen(
    onAboutButtonClick: () -> Unit,
    articlesViewModel: ArticlesViewModel,
) {
    val articlesState = articlesViewModel.articlesState.collectAsState()
    val articles = articlesState.value.articles
    val pagerState = rememberPagerState(pageCount = { articles.size })
    val screenWidth = Resources.getSystem().displayMetrics.widthPixels
    val screenHeight = (9.0 / 16.0 * screenWidth).toInt()
    Column(modifier = Modifier.fillMaxSize()) {
        AppBar(onAboutButtonClick)
        if (articlesState.value.loading)
            //Loader()
        if (articlesState.value.error != null)
            ErrorMessage(articlesState.value.error!!)
        if (articles.isNotEmpty()) {
            VerticalPager(
                state = pagerState,
                modifier = Modifier.fillMaxSize()
            ) { page ->
                val article = articles[page]
                if (article.tn == "webstory") {
                    HorizontalPagerContent(article.list, screenWidth)
                } else {
                    ArticleItemView(article, screenWidth, screenHeight)
                }
            }
        }
    }
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun HorizontalPagerContent(article: List<WebStory>, screenWidth: Int) {
    val horizontalPagerState = rememberPagerState(pageCount = { 5 }) // 5 horizontal pages
    val height = Resources.getSystem().displayMetrics.heightPixels

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center
    ) {
        //Text(text = "Vertical Page: ${pageIndex + 1}", style = MaterialTheme.typography.titleLarge)
       // Spacer(modifier = Modifier.height(16.dp))

        HorizontalPager(state = horizontalPagerState) { page ->
            Box(
                modifier = Modifier
                    .fillMaxHeight()
                    .fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                val webStory = article[page]
                val imageUrl = webStory.imageUrl.replace("<width>", screenWidth.toString())
                 .replace("<height>", height.toString())
                AsyncImage(
                    modifier = Modifier.fillMaxSize(),
                    model = imageUrl,
                    contentDescription = null
                )

            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun AppBar(
    onAboutButtonClick: () -> Unit,
) {
    TopAppBar(
        title = { Text(text = "Articles") },
        actions = {
            IconButton(onClick = onAboutButtonClick) {
                Icon(
                    imageVector = Icons.Outlined.Info,
                    contentDescription = "About Device Button",
                )
            }
        }
    )
}

@Composable
fun ArticleItemView(article: Article, screenWidth: Int, screenHeight: Int) {
    val imageUrl = article.imageUrl.replace("<width>", screenWidth.toString())
        .replace("<height>", screenHeight.toString())
    Column(
        modifier = Modifier
            .fillMaxSize()
    ) {
        AsyncImage(
            modifier = Modifier.aspectRatio(16/9f),
            model = imageUrl,
            contentDescription = null
        )

        Spacer(modifier = Modifier.height(4.dp))

        Text(
            modifier = Modifier.padding(16.dp),
            text = article.title,
            style = TextStyle(fontWeight = FontWeight.Bold, fontSize = 22.sp)
        )

        Text(
            text = article.date,
            style = TextStyle(color = Color.Gray),
            modifier = Modifier.align(Alignment.Start).padding(start = 16.dp)
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            modifier = Modifier.padding(horizontal = 16.dp),
            text = article.desc)
    }
}

@Composable
fun Loader() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        CircularProgressIndicator(
            modifier = Modifier.width(64.dp),
            color = MaterialTheme.colorScheme.surfaceVariant,
            trackColor = MaterialTheme.colorScheme.secondary,
        )
    }
}

@Composable
fun ErrorMessage(message: String) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = message,
            style = TextStyle(fontSize = 28.sp, textAlign = TextAlign.Center)
        )
    }
}







