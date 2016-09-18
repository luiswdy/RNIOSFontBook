'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  Navigator,
  View,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'

class SettingView extends Component {
	constructor(props) {
	  super(props);
	}

	render()  {
		return (
			<View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-start'}} >
				<Text style={{flex:1}}>Default sample text</Text>
				<TextInput style={{flex:8}} placeholder="Type your sample text here"  multiline={true} clearButtonMode={'while-editing'}/> 
			</View>
		)
	}
}

const styles = StyleSheet.create({
})

export default SettingView