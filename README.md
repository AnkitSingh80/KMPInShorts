# 📱 Shorts – A Short-Form News App Built with Kotlin Multiplatform (KMP)

**Shorts** is a Kotlin Multiplatform side project inspired by the popular news app *Inshorts*. The goal is to deliver short-form news on both Android and iOS using a shared codebase, without compromising native performance or UX.

## 🚀 Motivation

As an Android developer, this project was my opportunity to:
- Explore cross-platform app development using **Kotlin Multiplatform**
- Learn **SwiftUI** from scratch to build the iOS UI
- Share core logic between Android and iOS for faster, cleaner development

---

## ✨ Features

- 📰 Short-form news delivery
- 🔄 API integration using shared code
- 💾 Offline storage using SQLDelight
- 💉 Dependency Injection with Koin (for Android)
- 📱 Native UI on both platforms (Jetpack Compose & SwiftUI)
- 💡 Performance-focused design with multiplatform efficiency

---

## 🧰 Tech Stack

### Shared (KMP)
- Kotlin Multiplatform Mobile
- SQLDelight – for local/offline storage
- Shared ViewModels & business logic

### Android
- Jetpack Compose
- Koin (Dependency Injection)
- Kotlin Coroutines
- SQLDelight

### iOS
- SwiftUI
- SQLDelight
- Manual DI (Koin integration coming soon)

---

## 🧠 What I’ve Learned

- ✅ Sharing ViewModels, DB logic, and API calls via KMP really smoothens development.
- ⚙️ Performance remains solid — native feel on both platforms.
- 💡 SwiftUI has been a fun and powerful way to build UIs once you get the hang of it.

---

## 📌 Current Challenges

- Koin works well on Android, but iOS integration is a bit tricky. Currently using manual DI on iOS and planning to explore deeper Koin integration in future updates.

---

## 🛣️ Roadmap

- [x] Android App
- [x] iOS App
- [ ] Koin DI integration on iOS
- [ ] Desktop (Compose Multiplatform Desktop)
- [ ] Feature enhancements (categories, bookmark, search)
- [ ] Performance tuning and testing

---

## 💬 Feedback Welcome!

I'm still improving this project and would **love your suggestions**!  
Please feel free to:
- Open issues
- Submit PRs
- DM or comment with:
    - Tips to improve performance
    - Feature ideas
    - KMP/SwiftUI best practices

---
## 👋 Author

**Ankit** – Android developer exploring the power of Kotlin Multiplatform  
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/ankit-your-linkedin) 🚀

