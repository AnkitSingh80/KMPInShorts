package com.petros.efthymiou.dailypulse.di

import android.content.Context
import com.petros.efthymiou.dailypulse.database.DatabaseDriverFactory
import org.koin.android.ext.koin.androidContext
import org.koin.dsl.module

val androidModule = module {
    single<Context> { androidContext() }
    single { DatabaseDriverFactory(get()) } // Pass Context here
}
