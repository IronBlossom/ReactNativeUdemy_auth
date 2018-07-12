import React, { Component } from 'react';
import {
  FIREBASE_API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  MESSAGING_SENDER_ID
} from 'react-native-dotenv';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

const firebase = require('firebase');

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: FIREBASE_STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
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
