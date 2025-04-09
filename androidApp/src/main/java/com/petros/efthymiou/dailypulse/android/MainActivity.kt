package com.petros.efthymiou.dailypulse.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.*
import androidx.compose.ui.Modifier
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import org.koin.androidx.viewmodel.ext.android.viewModel


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
          val articlesViewModel : ArticlesViewModel by viewModel()
        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    //AppScaffold(articlesViewModel = articlesViewModel)
                 //   val context = LocalContext.current
                 //   val driverFactory = DatabaseDriverFactory(context)
                 //   val dbHelper = DatabaseHelper(driverFactory)
                 //   val articlesViewModel = ArticlesViewModel(dbHelper)
                    ArticlesScreen({}, articlesViewModel)
                }
            }
        }
    }
}
