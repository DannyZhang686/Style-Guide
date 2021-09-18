import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles, Button, FormText} from "../assets/styles.js";

export default function LandingPage({navigation}) {
  return (
    <View>
      <Image source ={require('../assets/home-page-background.png')} />
      <Image source ={require('../assets/style-guide-text.png')} />
      <Button onPress={() => navigation.navigate('Login')}>
        <Text>
          Let's go!
        </Text>
      </Button>
    </View>
  );
};
