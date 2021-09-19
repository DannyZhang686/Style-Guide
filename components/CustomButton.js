import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
} from "react-native";
import { styles } from "../assets/styles.js";

export default function CustomButton({ navFunction, buttonText }) {
  return (
    <>
    <View style={{ paddingLeft: 50, paddingRight: 50, width: "100%"}}>
      <TouchableHighlight
        style={[
          styles.buttonLanding, 
          {
            borderRadius: 10,
            backgroundColor: "#5D576B",
            padding: "10px",
            width: "100%",
          },
        ]}
        onPressFunc={navFunction}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
    </View>
    </>
  );
}
