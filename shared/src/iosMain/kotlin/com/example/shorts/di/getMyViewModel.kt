package com.example.shorts.di

import com.example.shorts.articles.ArticlesViewModel
import org.koin.mp.KoinPlatform.getKoin

fun getMyViewModel(): ArticlesViewModel {
    return getKoin().get()
}
