package com.example.shorts

import com.example.shorts.articles.ArticlesViewModel
import com.example.shorts.database.News

class DummyData {

    fun insertData(viewModel: ArticlesViewModel) {
        val news = News(
            wu = "some-wu",
            date = "2025-04-10",
            image = "https://static.sociofyme.com/photo/msid-151403580,imgsize-37904,updatedat-1744437990971,width-402,height-226,resizemode-75/151403580.jpg",
            title = "title coming from database sqlDelight",
            timeInMills = 1234567890
        )
        viewModel.insertNotification(news)
    }
}