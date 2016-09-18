//@flow
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Slider } from 'react-native'

class FontDetail extends Component {
	render() {
		return (
			<View style={{ padding: 15, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5FCFF'}}>
				<Text style={{flex: 1, fontFamily: this.props.route.fontFamily, fontSize: 18, textAlign: 'center'}}>{this.props.route.fontFamily}</Text>
				<Slider style={{flex: 1}} minimumValue={1} maximumValue={300} value={16} />
				<TextInput style={{flex: 8, fontFamily: this.props.route.fontFamily, borderWidth: 1, borderRadius: 5}} placeholder="Type your sample text here" multipleline={true}/>
			</View>
		)
	}
}

export default FontDetail