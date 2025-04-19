//
//  StringExtension.swift
//  iosApp
//
//  Created by ankit on 17/04/25.
//  Copyright © 2025 orgName. All rights reserved.
//

import Foundation
import UIKit

extension String {
    
    func getImageURL() -> String {
        let screenWidth = UIScreen.main.bounds.width
        let screenHeight = (9.0 / 16.0) * screenWidth
        return self.replacingOccurrences(of: "<width>", with: "\(Int(screenWidth))").replacingOccurrences(of: "<height>", with: "\(Int(screenHeight))")
    }
}
