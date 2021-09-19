import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles, Button, FormText, Container } from "../assets/styles.js";

export default function HomePage({ navigation }) {
  return (
    <Container>
      <Text>Hello, Jenny!</Text>
      <Text>Recent Activity</Text>
    </Container>
  );
}
