'use strict '

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
} from 'react-native';

class FontCell extends Component {
	render() {
		return (
			<View style={ {borderBottomWidth: 	1} }>
				<Text style={ {fontFamily: this.props.fontName} }>
					{this.props.fontName}
				</Text>
				<Text style={ {fontFamily: this.props.fontName} }>
					hello!
				</Text>
			</View>
		);
	}
}

class RNIOSFontBook extends Component {
  constructor(props) {
    super(props);
  	let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: dataSource.cloneWithRows(props.fonts) };
  }

  render() {
  	return (
  		<Navigator
  			initialRoute={ {title: "test", index: 0}  }
  			renderScene= { (route, navigator) => 
		  		<ListView
		  		style={{ marginTop: 50,
		  				 padding: 15,
		  				 flex: 1}}	// this property keeps list view's row not hidden by nav bar
		  		  dataSource={this.state.dataSource}
		  		  renderRow={(rowData) => <FontCell fontName={rowData}/>} />
  			}
  			navigationBar={
  			 	<Navigator.NavigationBar 
  			 		routeMapper={{
  			 			LeftButton: (route, navigator, index, navState) =>
  			 			{ return (<Text>Cancel</Text>); },
  			 			RightButton: (route, navigator, index, navState) => 
  			 			{ return (<Text>Done</Text>); },
  			 			Title: (route, navigator, index, navState) =>
  			 			{ return (<Text>Title</Text>); },

  			 		}}
  			 		style={ { backgroundColor: 'blue',
  			 				} }
  			 	/>
  			}
		/>
	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default RNIOSFontBook;