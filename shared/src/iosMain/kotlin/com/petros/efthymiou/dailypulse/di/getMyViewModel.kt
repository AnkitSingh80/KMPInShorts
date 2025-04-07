package com.petros.efthymiou.dailypulse.di

import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import org.koin.mp.KoinPlatform.getKoin

fun getMyViewModel(): ArticlesViewModel {
    return getKoin().get()
}
