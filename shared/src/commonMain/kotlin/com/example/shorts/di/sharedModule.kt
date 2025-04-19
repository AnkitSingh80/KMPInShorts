package com.example.shorts.di

import com.example.shorts.DatabaseHelper
import com.example.shorts.articles.ArticlesViewModel
import org.koin.dsl.module

val sharedModule = module {
    single { DatabaseHelper(get()) }
    single { ArticlesViewModel(get()) }
}

