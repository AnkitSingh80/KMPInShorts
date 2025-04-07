package com.petros.efthymiou.dailypulse.di

import org.koin.core.Koin
import org.koin.core.context.startKoin

fun initKoinIos(): Koin {
    return startKoin {
        modules(iosModule)
    }.koin
}
