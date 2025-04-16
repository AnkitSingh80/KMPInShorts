import SwiftUI

struct AppAsyncImageView: View {
    var url: String
    var body: some View {
        AsyncImage(url: URL(string: url)) { phase in
            switch phase {
            case .empty:
                Image("tnn_placeholder")
                                  .resizable()
                                  .scaledToFit()
            case .success(let image):
                image.resizable()
                    .aspectRatio(16/9, contentMode: .fit)                    
            case .failure:
                Image(systemName: "photo")
            @unknown default:
                Image("tnn_placeholder", bundle: nil)
            }
        }
    }
}

struct AppFullScreenAsyncImageView: View {
    var url: String
    var body: some View {
        AsyncImage(url: URL(string: url)) { phase in
            switch phase {
            case .empty:
                Image("tnn_vplaceholder")
                    .resizable()
                    .scaledToFill()
                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                    .clipped()
            case .success(let image):
                image
                    .resizable()
                    .scaledToFill()
                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
                    .clipped()
            case .failure:
                Image(systemName: "photo")
            @unknown default:
                Image("tnn_vplaceholder", bundle: nil)
            }
        }
        .onAppear{
        print(url)
    }
    }
}

struct NotificationImageView: View {
    var url: String

    var body: some View {
        AsyncImage(url: URL(string: url)) { phase in
            switch phase {
            case .empty:
                ProgressView()
                    .frame(width: UIScreen.main.bounds.width * 0.3, height: 80)
                    .background(Color.gray.opacity(0.2))

            case .success(let image):
                image
                    .resizable()
                    .aspectRatio(contentMode: .fill)

            case .failure(_):
                Image(systemName: "photo")
                    .resizable()
                    .scaledToFit()
                    .foregroundColor(.gray)

            @unknown default:
                Color.gray
            }
        }
        .onAppear{
            print(url + "ankit")
        }
        .frame(width: UIScreen.main.bounds.width * 0.3, height: 80)
        .clipShape(RoundedRectangle(cornerRadius: 8))
    }
}



#Preview{
    NotificationImageView(url: "https://static.sociofyme.com/photo/msid-151403580,imgsize-37904,updatedat-1744437990971,width-402,height-226,resizemode-75/151403580.jpg")
}
