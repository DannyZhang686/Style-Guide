import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles, StyledButton, FormText, Container, Title} from "../assets/styles.js";
import { Camera } from 'expo-camera';

var getAdopt1 = async() => {
  await fetch('https://vision.googleapis.com/v1/projects/positive-design-326420/locations/us-east1/productSets/', {
    method: 'POST',
    headers: {
        "Authorization": "Bearer $(gcloud auth application-default print-access-token)",
        "Content-Type": "application/json",
        "Content-Type": "charset=utf-8"
    },
    data: JSON.parse('./request.json'),
  }).then((response) => {alert(response), response.json()})
  .then((responseJson) => {
    let res = JSON.stringify(responseJson);
    alert("Response: " + responseJson);
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  })
}

export default function ComparisonPage({navigation}) {
  // fetch('request.json')
  //   .then(response => response.text())
  //   .then(text => alert(text))
  let ans = getAdopt1();
  alert(ans);
  return (
    <Container style={{padding:50, align: "centre"}}> 
    <Title>
      Your image was successfully saved! Here are your top matching wardrobe items:
    </Title>
    </Container>
  );
};