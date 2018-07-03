import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAel2cNKe7XgFLKwBq0QmxQx1DYADpYRPE',
      authDomain: 'authentication-dfe29.firebaseapp.com',
      databaseURL: 'https://authentication-dfe29.firebaseio.com',
      projectId: 'authentication-dfe29',
      storageBucket: 'authentication-dfe29.appspot.com',
      messagingSenderId: '49690979669'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app!</Text>
      </View>
    );
  }
}

export default App;
