import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles, Button, FormText} from "../assets/styles.js";

export default function SignUpPage({navigation}) {
  return (
    <View>
      <FormText>
        Sign Up
      </FormText>
      <FormText>
        First Name
      </FormText>
      <TextInput placeholder="First Name" textContentType="givenName" keyboardType="name"/>
      <FormText>
        Last Name
      </FormText>
      <TextInput placeholder="Last Name" textContentType="familyName" keyboardType="email-address"/>
      <FormText>
        Email
      </FormText>
      <TextInput placeholder="Email" textContentType="emailAddress" keyboardType="email-address"/>
      <FormText>
        Password
      </FormText>
      <TextInput placeholder="Password" textContentType="password" secureTextEntry={true}/>
      <Button onPress={() => navigation.navigate('Sign Up')}>
        <Text>
          Sign Up
        </Text>
      </Button>
      <Text onPress={() => navigation.navigate('Login')}>
        Login instead
      </Text>
    </View>
  );
};