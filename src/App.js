import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebase = require('firebase');
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
        <LoginForm />
      </View>
    );
  }
}

export default App;
