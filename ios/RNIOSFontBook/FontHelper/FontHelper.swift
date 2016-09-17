//
//  FontHelper.swift
//  RNIOSFontBook
//
//  Created by Luis Wu on 7/22/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import UIKit

@objc class FontHelper: NSObject {
    static let fonts: [String] = {
      var fonts: [String] = []
      for family in UIFont.familyNames.sorted() {
        for font in UIFont.fontNames(forFamilyName: family).sorted() {
          fonts.append(font)
          print("Font family: \(family), font name: \(font)")
        }
      }
      return fonts
    }()
}
