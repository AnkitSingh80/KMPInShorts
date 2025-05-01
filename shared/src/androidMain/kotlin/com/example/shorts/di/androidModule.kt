package com.example.shorts.di

import com.example.shorts.database.DatabaseDriverFactory
import org.koin.dsl.module

val androidModule = module {
    single { DatabaseDriverFactory(get()) }
}
