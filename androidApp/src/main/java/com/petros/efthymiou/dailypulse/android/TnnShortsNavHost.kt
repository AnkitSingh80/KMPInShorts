package com.petros.efthymiou.dailypulse.android

import NotificationScreen
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel

const val homeRoute = "Home-01"
const val notification = "Not-01"

@Composable
fun TnnShortsNavHost(navController: NavHostController,
                     viewModel: ArticlesViewModel) {

    NavHost(
        navController = navController,
        startDestination = homeRoute
    ){
        composable(homeRoute) {
            ArticlesScreen({
                navController.navigate(notification)
            }, viewModel)
        }
        composable(notification) {
            NotificationScreen(viewModel)
        }
    }
}