package com.example.shorts

import android.app.Application
import com.example.shorts.di.androidModule
import com.example.shorts.di.sharedModule
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

