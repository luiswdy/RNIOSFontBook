// @flow
'use strict'
import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
} from 'react-native'
import { NavIdxEnum } from './RNIOSFontBook'


class FontCell extends Component {
  render() {
    return (
      <TouchableOpacity style={ {borderBottomWidth: 1} } onPress={ () => {
        this.props.navigator.push( {title: "Detail", index: NavIdxEnum.DetailIdx, fontFamily: this.props.fontName} ); 
      }}>
        <Text style={ {padding: 5, fontFamily: this.props.fontName, fontSize: 18} }>
          {this.props.fontName}
        </Text>
        <Text style={ {padding: 5, fontFamily: this.props.fontName} }>
          Sample text / 範例文字  
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FontCell