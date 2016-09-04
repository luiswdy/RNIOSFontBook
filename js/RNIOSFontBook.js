'use strict '

import React, { Component } from 'react'
import FontCell from './FontCell'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight,
} from 'react-native'

// Enum for navigation indices
var NavIdxEnum = {
  ListViewIdx: 0,
  DetailIdx: 1,
}
Object.freeze(NavIdxEnum)

class RNIOSFontBook extends Component {
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { dataSource: dataSource.cloneWithRows(props.fonts) };
  }

  render() {
    return (
      <Navigator
        initialRoute={ {title: "System Fonts", index: 0}  }
        renderScene={ (route, navigator) => 
          {
            switch (route.index) {
              case NavIdxEnum.ListViewIdx:
                return <ListView
                style={{ marginTop: 50,
                     padding: 15,
                     flex: 1}}  // this property keeps list view's row not hidden by nav bar
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => <FontCell navigator={navigator} fontName={rowData}/>} />
                break
              case NavIdxEnum.DetailIdx:
                return <View style={styles.container}><Text  style={{    textAlign: 'center'}}>Hello</Text></View>
                break
              default:
                break
            }
          }
        }
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              { 
                switch (index) {
                  case NavIdxEnum.ListViewIdx:
                    return null;  // no left button for root view
                    break
                  case NavIdxEnum.DetailIdx:
                    return (
                      <TouchableHighlight onPress={() => navigator.pop()}
                      style={{ flex: 1, justifyContent: 'center', padding: 15, borderRadius: 10}}>
                        <Text style={{fontSize: 16, fontFamily: 'System'}}>&lt; Back</Text>
                      </TouchableHighlight>
                    )
                    break
                  default:
                    break
                }                 
              },
              RightButton: (route, navigator, index, navState) => 
              { 
                if (index === 0) {
                  return (
                  <TouchableHighlight onPress={() => navigator.pop()}
                  style={{flex:1, justifyContent: 'center', padding: 15, borderRadius: 10}}>
                    <Text style={{fontSize: 16, fontFamily: 'System', fontWeight: '100'}}>Settings</Text>
                  </TouchableHighlight>
                  ) 
                } else {
                  return null;
                }
            },
              Title: (route, navigator, index, navState) =>
              { return (
                <View style={{flex:1, justifyContent: 'center'}}>
                  <Text style={{fontSize: 16, fontFamily: 'System', fontWeight: '100' /*weight 100, 200 .. 900, normal, bold*/}}>{route.title}</Text>
                </View>
                )
            },

            }}
            style={ { backgroundColor: 'white',
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
})

export default RNIOSFontBook