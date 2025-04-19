package com.petros.efthymiou.dailypulse.android

import android.app.Application
import com.petros.efthymiou.dailypulse.di.androidModule
import com.petros.efthymiou.dailypulse.di.sharedModule
import org.koin.android.ext.koin.androidContext
import org.koin.core.context.GlobalContext.startKoin

class App : Application() {

    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidContext(this@App)
            modules(androidModule, sharedModule)
        }
    }
}

