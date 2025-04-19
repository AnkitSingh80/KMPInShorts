package com.example.shorts.viewmodel

import kotlinx.coroutines.CoroutineScope

expect open class BaseViewModel() {

    val scope: CoroutineScope
}