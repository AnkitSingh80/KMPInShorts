struct HorizontalStoryScrollView: View {
    let article: Article

    var body: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            LazyHStack(spacing: 8) {
                ForEach(article.list, id: \.id) { story in
                    ShortsView(article: story)
                        .frame(width: 120, height: 200) // Fixed size for smooth scrolling
                        .cornerRadius(12)
                }
            }
            .padding(.horizontal)
        }
        .scrollTargetBehavior(.paging)
        .frame(height: 220) // Prevents layout jumping
    }
}
