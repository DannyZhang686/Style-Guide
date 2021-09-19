import React from "react";
import { View, Text, TextInput } from "react-native";
import {
  styles,
  Container,
  StyledButton,
  FormText,
  Title,
} from "../assets/styles.js";

import AuthButton from "../components/ButtonAuth.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const signUpUser = async ({ firstName, lastName, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(user);
    const res = await firebase.firestore().collection("users").doc(user.user.uid).set({
      firstName,
      lastName
    });
    console.log(res);
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == "auth/weak-password") {
      alert("The password is too weak.");
    } else {
      alert(errorMessage);
    }
  }
};

export default function SignUpPage({ navigation }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container>
      <Title>Sign Up</Title>
      <FormText>First Name           </FormText>
      <TextInput
        placeholder="First Name"
        textContentType="givenName"
        keyboardType="name"
        value={firstName}
        onChangeText={setFirstName}
        style={
          styles.input, {
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <FormText>Last Name            </FormText>
      <TextInput
        placeholder="Last Name"
        textContentType="familyName"
        keyboardType="name"
        value={lastName}
        onChangeText={setLastName}
        style={
          styles.input, {
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <FormText>Email                    </FormText>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={
          styles.input, {
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <FormText>Password              </FormText>
      <TextInput
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={
          styles.input, {
          borderRadius: 7.5,
          backgroundColor: "#F4E9E9",
          border: "0.5px solid #5D576B",
          padding: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      {/* <AuthButton onPressFunc={() => signUpUser({firstName, lastName, email, password})} buttonText={"Sign Up"}/> */}
      <AuthButton onPressFunc={() => navigation.navigate("Upload Success")} buttonText={"Sign Up"}/>
      <Text>{"\n"}</Text>
      <Text onPress={() => navigation.navigate("Login")}>Login instead</Text>
      
      {/* <StyledButton
        onPress={() => navigation.navigate("Landing")}
        title="goto landing"
      />
      <StyledButton
        onPress={() => navigation.navigate("Tabs")}
        title="goto tabs"
      />
      <StyledButton
        onPress={() => navigation.navigate("Upload Success")}
        title="goto uploadsuccess"
      />
      <StyledButton
        onPress={() => navigation.navigate("Comparison")}
        title="goto comparison"
      /> */}
    </Container>
  );
}
