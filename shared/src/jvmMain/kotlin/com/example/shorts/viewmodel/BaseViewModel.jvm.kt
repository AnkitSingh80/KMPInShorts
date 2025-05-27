package com.example.shorts.viewmodel

import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.cancel


actual open class BaseViewModel {

    actual val scope: CoroutineScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

    fun clear() {
        scope.cancel()
    }
}

