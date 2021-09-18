import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles, Button, FormText} from "../assets/styles.js";

export default function HomePage({navigation}) {
  return (
    <View>
      <Text>
        Hello, Jenny!
      </Text>
      <Text>
        Recent Activity
      </Text>
    </View>
  );
};