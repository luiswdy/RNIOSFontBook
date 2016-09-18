// @flow
'use strict'
import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'
import { NavIdxEnum } from './RNIOSFontBook'


class FontCell extends Component {
  constructor(props) {
    super(props);
  
    this.state = {sampleText: 'This is default sample text'};
    AsyncStorage.getItem('@sample_text_key')
      .then((value) => { 
          if (value !== null) {
            this.setState({sampleText: value});
          }
        }).done();
  }

  render() {
    return (
      <TouchableOpacity style={ {borderBottomWidth: 1} } onPress={ () => {
        this.props.navigator.push( {title: "Detail", index: NavIdxEnum.DetailIdx, fontFamily: this.props.fontName} ); 
      }}>
        <Text style={ {padding: 5, fontSize: 18} }>
          {this.props.fontName}
        </Text>
        <Text style={ {padding: 5, fontFamily: this.props.fontName} }>
          {this.state.sampleText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FontCell