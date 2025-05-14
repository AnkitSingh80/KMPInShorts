package com.example.shorts.di

import com.example.shorts.articles.ArticlesUseCase
import com.example.shorts.database.DatabaseDriverFactory
import org.koin.dsl.module

val androidModule = module {
    single { ArticlesUseCase(get()) }
    single { DatabaseDriverFactory(get()) }
    //viewModel { ArticlesViewModel(get()) }
}
