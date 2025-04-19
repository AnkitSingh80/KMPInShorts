import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import com.example.shorts.articles.ArticlesViewModel
import comexampleshortssqldelight.Notification

data class NotificationItem(
    val image: String,
    val title: String,
    val message: String,
    val time: String
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun NotificationScreen(
    viewModel: ArticlesViewModel,
    onDismiss: () -> Unit
) {
    val notificationsFlow = viewModel.fetchAllNotification()
    val notificationsList by  notificationsFlow.collectAsState(initial = emptyList())

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Notifications") },
                navigationIcon = {
                    IconButton(onClick = onDismiss) {
                        Icon(Icons.Default.Close, contentDescription = "Close")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.White)
            )
        }
    ) { innerPadding ->
        LazyColumn(contentPadding = innerPadding) {
            items(notificationsList, key = {it.hashCode() }) { notification ->
                NotificationItem(notification = notification)
            }
        }
    }
}

@Composable
fun NotificationItem(notification: Notification) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        NotificationImageView(url = notification.image)
        Column(modifier = Modifier.weight(1f)) {
            Text(text = notification.title, style = MaterialTheme.typography.bodySmall)
        }
        Text(
            text = notification.date,
            style = MaterialTheme.typography.bodySmall,
            color = Color.Gray
        )
    }
}


@Composable
fun NotificationImageView(url: String) {
    val imageModifier = Modifier
        .width(LocalConfiguration.current.screenWidthDp.dp * 0.3f)
        .height(80.dp)
        .clip(RoundedCornerShape(8.dp))


    AsyncImage(
        model = url,
        contentDescription = null,
        contentScale = ContentScale.Crop,
        modifier = imageModifier
    )
}
