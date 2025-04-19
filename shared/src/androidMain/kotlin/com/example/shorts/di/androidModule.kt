package com.example.shorts.di

import com.example.shorts.articles.ArticlesViewModel
import com.example.shorts.database.DatabaseDriverFactory
import org.koin.core.module.dsl.viewModel
import org.koin.dsl.module

val androidModule = module {
    single { DatabaseDriverFactory(get()) }
    viewModel { ArticlesViewModel(get()) }
}
