//@flow
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Slider, AsyncStorage } from 'react-native'

class FontDetail extends Component {
	constructor(props) {
	  super(props);

	  this.state = {fontSize: 16, };

	AsyncStorage.getItem('@sample_text_key').then((value) => {
		if (value !== null) {
			this.setState({sampleText: value});
		}
	}).done()
	}

	render() {
		return (
			<View style={{ padding: 15, flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', backgroundColor: '#F5FCFF'}}>
				<Text style={{ fontFamily: this.props.route.fontFamily, fontSize: 18, textAlign: 'center'}}>{this.props.route.fontFamily} - size: {this.state.fontSize}</Text>
				<Slider 
					style={{width:200, margin: 20, alignSelf: 'center'}}
					minimumValue={1} 
					maximumValue={100} 
					step={1}
					value={this.state.fontSize} 
		            onValueChange={(value) => this.setState({fontSize: value})} />
				<TextInput style={{flex: 1, fontFamily: this.props.route.fontFamily, fontSize: this.state.fontSize }} placeholder="Type your sample text here" multiline={true} value={this.state.sampleText}/>
			</View>
		)
	}
}

export default FontDetail