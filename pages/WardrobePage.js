import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles, Container, StyledButton, FormText} from "../assets/styles.js";

export default function WardrobePage({navigation}) {
  return (
    <Container>
      <Text>
        Welcome, Jenny!
      </Text>
      <Text>
        My Wardrobe
      </Text>
    </Container>

  );
};