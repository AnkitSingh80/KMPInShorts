package com.petros.efthymiou.dailypulse.di

import com.petros.efthymiou.dailypulse.DatabaseHelper
import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import org.koin.dsl.module

val sharedModule = module {
    single { DatabaseHelper(get()) }
    single { ArticlesViewModel(get()) }
}

