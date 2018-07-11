import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

const firebase = require('firebase');

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((obj) => {
                console.log(`Successful: responseObject= ${obj}`);
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch((err) => {
                        console.log(err);
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner sizeOfSpinner='small' />;
        }

        return (
            <Button propOnPressed={this.onButtonPress.bind(this)} >
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle} >
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
