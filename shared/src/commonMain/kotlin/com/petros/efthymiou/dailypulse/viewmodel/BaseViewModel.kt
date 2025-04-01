package com.petros.efthymiou.dailypulse.viewmodel

import kotlinx.coroutines.CoroutineScope

expect open class BaseViewModel() {

    val scope: CoroutineScope
}