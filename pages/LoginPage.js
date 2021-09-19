import React from "react";
import { Text, TextInput } from "react-native";

import firebase from "firebase/app";
import "firebase/auth";
import {
  styles,
  Container,
  StyledButton,
  LeftAlign,
  StyledTextInput,
  FormText,
  Title,
} from "../assets/styles.js";

import AuthButton from "../components/ButtonAuth";
// import LandingPage from "../pages/LandingPage";

const loginUser = async ({email, password}) => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    alert(error.message);
  }
}

export default function LoginPage({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <Title>Login</Title>
      <FormText>Username            </FormText>
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        textContentType="emailAddress" 
        keyboardType="email-address"
        value={email}
        style={{
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
        onChangeText={setEmail}
      />
      <FormText>Password             </FormText>
      <TextInput
        style={styles.input} 
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <AuthButton onPressFunc={() => loginUser(email, password)} buttonText={"Login"}/>
      <Text>{"\n"}</Text>
      <Text onPress={() => navigation.navigate("Sign Up")}>
        Sign up instead
      </Text>
    </Container>
  );
}
