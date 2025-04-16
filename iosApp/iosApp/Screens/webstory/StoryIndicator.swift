import Foundation
import SwiftUI

struct SegmentedStoryProgressBar: View {
    let count: Int
    let current: Int
    @Binding var progress: CGFloat

    var body: some View {
        HStack(spacing: 4) {
            ForEach(0..<count, id: \.self) { index in
                GeometryReader { geo in
                    ZStack(alignment: .leading) {
                        Capsule()
                            .foregroundColor(.white.opacity(0.4))

                        if index < current {
                            Capsule()
                                .foregroundColor(.white)
                                .frame(width: geo.size.width)
                        } else if index == current {
                            Capsule()
                                .foregroundColor(.white)
                                .frame(width: geo.size.width * progress)
                                .animation(.linear(duration: 0.05), value: progress)
                        }
                    }
                }
                .frame(height: 4)
            }
        }
        .padding(.horizontal)
    }
}


