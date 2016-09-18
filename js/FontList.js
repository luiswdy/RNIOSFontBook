// @flow
'use strict'
import React, { Component } from 'react'
import {
  Text,
  ListView,
} from 'react-native'
import FontCell from './FontCell'

class FontList extends Component {
	render() {
		return <ListView 
				  style={{ padding: 15, }}  // this property keeps list view's row not hidden by nav bar
				  dataSource={this.props.dataSource}
				  renderRow={(rowData) => <FontCell navigator={this.props.navigator} fontName={rowData}/>} 
				/>	
	}
}

export default FontList