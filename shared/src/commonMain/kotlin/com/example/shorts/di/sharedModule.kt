package com.example.shorts.di

import ArticlesLocalDataSource
import com.example.shorts.DatabaseHelper
import com.example.shorts.articles.ArticlesRepository
import com.example.shorts.articles.ArticlesRepositoryImpl
import com.example.shorts.articles.ArticlesService
import com.example.shorts.articles.ArticlesViewModel
import io.ktor.client.HttpClient
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json
import org.koin.dsl.module

val sharedModule = module {

    single {
        HttpClient {
            install(ContentNegotiation) {
                json(Json {
                    prettyPrint = true
                    isLenient = true
                    ignoreUnknownKeys = true
                })
            }
        }
    }
    single<ArticlesLocalDataSource> { DatabaseHelper(get()) }
    single { ArticlesService(get()) }
    single { DatabaseHelper(get()) }
    single<ArticlesRepository> { ArticlesRepositoryImpl(get(), get()) }
    single { ArticlesViewModel(get())}
}

