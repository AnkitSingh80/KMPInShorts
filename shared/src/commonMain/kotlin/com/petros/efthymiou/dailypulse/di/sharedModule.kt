package com.petros.efthymiou.dailypulse.di

import com.petros.efthymiou.dailypulse.DatabaseHelper
import org.koin.dsl.module

val sharedModule = module {
    single { DatabaseHelper(get()) }
}
