package com.petros.efthymiou.dailypulse.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.*
import androidx.compose.ui.Modifier
import androidx.navigation.compose.rememberNavController
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import com.petros.efthymiou.dailypulse.database.News
import org.koin.androidx.compose.koinViewModel
import org.koin.androidx.viewmodel.ext.android.viewModel


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            val navController = rememberNavController()
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val viewModel: ArticlesViewModel = koinViewModel()
                    viewModel.insertNotification(News("","","","Notication Test testset",0L))
                    TnnShortsNavHost(navController, viewModel)
                }
            }
        }
    }
}
