/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  Animated,
  FlatList,
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';
import FlatListExample from "./flatlist";

class MyTab extends Component {
  state = {
    selectedTab: 'physicianTab',
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Physician"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'physicianTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'physicianTab'
            });
          }}>
          <MyScene title="Physician"/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Dentist"
          systemIcon="featured"
          selected={this.state.selectedTab === 'dentistTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'dentistTab'
            });
          }}>
          <MyScene title="Dentist"/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Contractor"
          systemIcon="top-rated"
          selected={this.state.selectedTab === 'contractorTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'contractorTab'
            });
          }}>
          <MyScene title="Contractor"/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === 'moreTab'}
          onPress={() => {
            this.setState({
              selectedTab: "moreTab",
            });
          }}>
          <MyScene title="More"/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

class MyScene extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <Text>Current Scene: {title}</Text>
        <TouchableHighlight>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text>Tap me to go back! Yes !</Text>
        </TouchableHighlight>

        <TouchableHighlight>
          <Text>Tap me all the way to front</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
};

export default class TrueViewz extends Component {
  render() {
    return (
      <MyTab/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    justifyContent: "center",
    alignItems: "center"
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
  img: {
    marginTop: 10 ,
    height: 110,
    width: 193,
    borderWidth: 1,
    borderColor: 'black'
  },
  input: {
    height: 40,
    width: 193,
    alignItems: 'center',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('TrueViewz', () => TrueViewz);
