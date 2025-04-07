package com.petros.efthymiou.dailypulse.di

import com.petros.efthymiou.dailypulse.articles.ArticlesViewModel
import com.petros.efthymiou.dailypulse.database.DatabaseDriverFactory
import org.koin.dsl.module

val androidModule = module {
    //single<Context> { androidContext() }
    single { DatabaseDriverFactory(get()) }
   // viewModel { ArticlesViewModel() }

}
