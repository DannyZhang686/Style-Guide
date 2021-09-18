import React from 'react';
import {View, Text, TextInput} from 'react-native';
import app from "../firebase/config";
import {styles, Container, Button, FormText} from "../assets/styles.js";

export default function LoginPage({navigation}) {
  const auth = app.auth().currentUser();

  return (
    <Container>
      <Title>
        Login
      </Title>
      <FormText>
        Login {"test " + (user ? user.uid : "no user logged in")}
      </FormText>
      <FormText>
        Username
      </FormText>
      <TextInput placeholder="Email" textContentType="emailAddress" keyboardType="email-address"/>
      <FormText>
        Password
      </FormText>
      <TextInput placeholder="Password" textContentType="password" secureTextEntry={true}/>
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>
          Login
        </Text>
      </Button>
      <Text onPress={() => navigation.navigate('Sign Up')}>
        Sign up instead
      </Text>
    </Container>
  );
};