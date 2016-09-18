'use strict '

import React, { Component } from 'react'
import FontList from './FontList'
import FontDetail from './FontDetail'
import SettingView from './SettingView'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Navigator,
  TouchableHighlight,
} from 'react-native'

// Enum for navigation indices
export const NavIdxEnum = {
  ListViewIdx: 0,
  DetailIdx: 1,
  SettingsIdx: 2,
}
Object.freeze(NavIdxEnum)

class RNIOSFontBook extends Component {
  render() {
    return (
      <Navigator
        sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}  // this keeps context not get overlayed by navigation bar
        style={{flex: 1}}
        initialRoute={ {title: "System Fonts", index: NavIdxEnum.ListViewIdx}  }
        renderScene={ (route, navigator) => 
          {
            switch (route.index) {
              case NavIdxEnum.ListViewIdx:
                return <FontList 
                  dataSource={new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.fonts)}
                  navigator={navigator} />
                break
              case NavIdxEnum.DetailIdx:
                return <FontDetail route={route}/>
                break
              case NavIdxEnum.SettingsIdx:
                return <SettingView />
                break
              default:
                return null
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
                    return null  // no left button for root view
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
                  <TouchableHighlight onPress={() => navigator.push( {title: "Settings", index: NavIdxEnum.SettingsIdx} )}
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