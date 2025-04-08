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
                                  .scaledToFit()
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




#Preview{
    AppFullScreenAsyncImageView(url: "https://picsum.photos/200/300")
}
