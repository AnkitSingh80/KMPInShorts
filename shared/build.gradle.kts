
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
    alias(libs.plugins.skie)
    kotlin("plugin.serialization") version "1.9.20"
    alias(libs.plugins.sqlDelight)
}

val skipNative = project.findProperty("skipNative") == "true"

@OptIn(org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi::class)
kotlin {
    targetHierarchy.default()

    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
                freeCompilerArgs += "-Xexpect-actual-classes"
            }
        }
    }

    if(!skipNative) {
        listOf(
            iosX64(),
            iosArm64(),
            iosSimulatorArm64()
        ).forEach {
            it.binaries.framework {
                baseName = "shared"
                isStatic = false
            }
        }
    }

    sourceSets {

        val androidMain by getting {
            dependencies {
                implementation(libs.androidx.activity.compose)
                implementation(libs.ktor.client.android)
                implementation(libs.androidx.lifecycle.viewmodel.ktx)
                implementation(libs.ktor.client.android)
                implementation(libs.android.driver)
                implementation(libs.koin.android)
            }
        }


        val commonMain by getting {
            dependencies {
                implementation(libs.kotlinx.coroutines.core)
                implementation(libs.ktor.client.core)
                implementation(libs.ktor.client.content.negotiation)
                implementation(libs.ktor.serialization.kotlinx.json)
                implementation(libs.kotlinx.datetime)

                implementation(libs.runtime)
                implementation(libs.coroutines.extensions)
                implementation(libs.koin.core)

            }
        }

        val iosMain by getting {
            dependencies {
                implementation(libs.ktor.client.darwin)
                implementation(libs.native.driver)

            }
        }

      /*  val jsMain by getting {
            dependencies {
                implementation(libs.compose.html.core)
                implementation(libs.kobweb.silk)
                implementation(libs.web.core)
                implementation(libs.kobweb.core)
                implementation(libs.kotlinx.serialization)
                implementation(project(":worker"))
            }
        }*/

       /* val jvmMain by getting {
            dependencies {
                implementation(libs.kobweb.api)
                implementation(libs.kmongo.coroutine)
                implementation(libs.kmongo.serialization)
                implementation(libs.kotlinx.serialization)
            }
        }*/

        val commonTest by getting {
            dependencies {
                implementation(libs.kotlin.test)
            }
        }
    }
}

sqldelight {
    database("AppDatabase") {
        packageName = "com.example.shorts.sqldelight"
        sourceFolders = listOf("sqldelight")
    }
}
android {
    namespace = "com.example.shorts"
    compileSdk = 34
    defaultConfig {
        minSdk = 24
    }
}



