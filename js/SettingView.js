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
	
	    this.state = {sampleText: 'This is the default sample text.'};
		AsyncStorage.getItem('@sample_text_key').then((value) => {
			if (value !== null) {
				this.setState({sampleText: value});
			}
		}).done()
	}

	render()  {
		return (
			<View style={{flex: 1, flexDirection: 'column', justifyContent:'flex-start'}} >
				<TextInput style={{flex: 1, padding: 15 }} placeholder="Type your default sample text"  multiline={true} clearButtonMode={'always'}
				value={this.state.sampleText}
				onChangeText={(text) => this.setState({sampleText: text})}/> 
				<TouchableOpacity 
					onPress={() => {
							AsyncStorage.setItem('@sample_text_key', this.state.sampleText);
						}
					} 
					style={{height: 30, marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, borderRadius: 5, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}> 
					<Text>Save</Text>
				</TouchableOpacity>
				<TouchableOpacity 
				onPress={() => {
						AsyncStorage.getItem('@sample_text_key').then((value) => {
							if (value !== null) {
								this.setState({sampleText: value});
							} else {
								this.setState({sampleText: 'This is the default sample text.'})
							}
						}).done()
					}
				}
				style={{height: 30, marginLeft: 10, marginRight: 10, marginTop: 5, marginBottom: 5, margin: 10, borderRadius: 5, borderWidth: 1, justifyContent:'center', alignItems:'center'}}>
					<Text>Cancel</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
})

export default SettingView