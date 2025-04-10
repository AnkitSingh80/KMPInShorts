import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import competrosefthymioudailypulsesqldelight.Notification

data class NotificationItem(
    val image: String,
    val title: String,
    val message: String,
    val time: String
)

@Composable
fun NotificationScreen(viewModel: ArticlesViewModel) {
    val notificationsFlow = viewModel.fetchAllNotification()
    val notifications by  notificationsFlow.collectAsState(initial = emptyList())

    Scaffold(
        topBar = {
            //TopAppBar(title = { Text("Notifications") })
        }
    ) { paddingValues ->
        LazyColumn(
            contentPadding = paddingValues,
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            items(notifications) { notification ->
                NotificationRow(notification)
            }
        }
    }
}

@Composable
fun NotificationRow(notification: Notification) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        /*Image(
            painter = painterResource(id = notification.image),
            contentDescription = null,
            modifier = Modifier
                .size(40.dp)
                .clip(CircleShape),
            alpha = 1.0f
        )*/

        Column(
            modifier = Modifier.weight(1f)
        ) {
            Text(text = notification.title, fontWeight = FontWeight.Bold, fontSize = 16.sp)
            Text(text = "", color = Color.Gray, fontSize = 14.sp)
        }

        Text(text = "", color = Color.Gray, fontSize = 12.sp)
    }
}
