import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import {styles, StyledButton, FormText} from "../assets/styles.js";

export default function AuthButton({ buttonText, onPressFunc }) {
  return (
  <View style={{width: "170px"}}>
    <TouchableHighlight 
      style={
        styles.button, { 
        borderRadius: 10, 
        backgroundColor: "#5D576B",
        width: "100%",
        marginTop: 20,
        padding: 10,
        width: "100%"
      }}
      onPress={onPressFunc}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
  </View>
  );
};