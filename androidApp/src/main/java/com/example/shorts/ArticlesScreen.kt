package com.example.shorts


import android.content.res.Resources
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.VerticalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Info
import androidx.compose.material.icons.outlined.Notifications
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import com.example.shorts.articles.Article
import com.example.shorts.articles.ArticlesViewModel
import com.example.shorts.articles.WebStory
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

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
        //AppBar(onAboutButtonClick)
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
                Box {
                    if (article.tn == "webstory") {
                        HorizontalPagerContent(article.list, screenWidth)
                    } else {
                        ArticleItemView(article, screenWidth, screenHeight)
                    }
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp)
                    ) {
                        Spacer(modifier = Modifier.weight(1f))
                        IconButton(onClick = onAboutButtonClick) {
                            Icon(
                                imageVector = Icons.Outlined.Notifications,
                                tint = Color.White,
                                contentDescription = "notification",
                            )
                        }
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalFoundationApi::class)
@Composable
fun HorizontalPagerContent(article: List<WebStory>, screenWidth: Int) {
    val pageCount = article.size
    val pagerState = rememberPagerState(pageCount = { pageCount })
    val screenHeight = Resources.getSystem().displayMetrics.heightPixels
    var currentPage by remember { mutableIntStateOf(0) }
    var progress by remember { mutableFloatStateOf(0f) }
    val scope = rememberCoroutineScope()

    val storyDuration = 5000L

    val animatedProgress by animateFloatAsState(
        targetValue = progress,
        animationSpec = tween(durationMillis = 100, easing = LinearEasing),
        label = "Progress Animation"
    )

    LaunchedEffect(currentPage) {
        progress = 0f
        val interval = 50L
        val steps = storyDuration / interval

        repeat(steps.toInt()) {
            delay(interval)
            progress += 1f / steps
        }

        if (currentPage < pageCount - 1) {
            currentPage++
            pagerState.animateScrollToPage(currentPage)
        }
    }

    LaunchedEffect(pagerState.currentPage) {
        currentPage = pagerState.currentPage
    }

    Box(modifier = Modifier.fillMaxSize()) {
        HorizontalPager(state = pagerState) { page ->
            val webStory = article[page]
            val imageUrl = webStory.imageUrl.replace("<width>", screenWidth.toString())
                .replace("<height>", screenHeight.toString())

            AsyncImage(
                model = imageUrl,
                contentDescription = null,
                contentScale = ContentScale.Crop,
                placeholder = painterResource(id = com.example.shorts.android.R.drawable.webstory_placeholder),
                modifier = Modifier.fillMaxSize()
            )
        }
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 8.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            for (i in 0 until pageCount) {
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .height(4.dp)
                        .clip(RoundedCornerShape(2.dp))
                        .background(Color.Gray.copy(alpha = 0.3f))
                ) {
                    if (i <= currentPage) {
                        Box(
                            modifier = Modifier
                                .fillMaxHeight()
                                .fillMaxWidth(
                                    if (i < currentPage) 1f else animatedProgress
                                )
                                .clip(RoundedCornerShape(2.dp))
                                .background(Color.White)
                        )
                    }
                }
            }
        }
    }


    Row(
        modifier = Modifier
            .fillMaxSize()
    ) {
        Box(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight()
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null
                ) {
                    if (pagerState.currentPage > 0) {
                        scope.launch {
                            pagerState.animateScrollToPage(pagerState.currentPage - 1)
                        }
                    }
                }
        )
        Box(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight()
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null
                ) {
                    if (pagerState.currentPage < article.size - 1) {
                        scope.launch {
                            pagerState.animateScrollToPage(pagerState.currentPage + 1)
                        }
                    }
                }
        )
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
            modifier = Modifier.aspectRatio(16 / 9f),
            model = imageUrl,
            error = painterResource(id = com.example.shorts.android.R.drawable.placeholder_large_default),
            placeholder = painterResource(id = com.example.shorts.android.R.drawable.placeholder_large_default),
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
            modifier = Modifier
                .align(Alignment.Start)
                .padding(start = 16.dp)
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            modifier = Modifier.padding(horizontal = 16.dp),
            text = article.desc
        )
        Box(
            modifier = Modifier.fillMaxSize()
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(70.dp)
                    .align(Alignment.BottomCenter) // Align this whole box at bottom
                    .background(Color.Gray.copy(alpha = 0.1f))
                    .padding(bottom = 10.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "Swipe left to read full story",
                    textAlign = TextAlign.Center
                )
            }
        }
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







