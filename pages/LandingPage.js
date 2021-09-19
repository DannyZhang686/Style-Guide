import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text,
} from "react-native";
import { styles, StyledButton, FormText } from "../assets/styles.js";

import backgroundImage from "../assets/home_page_background.png";
import foregroundImage from "../assets/style_guide_text.png";
import CustomButton from "../components/CustomButton";

const styless = StyleSheet.create({
  tinyLogo: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default function LandingPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Image source={backgroundImage} style={styless.tinyLogo}/>
      <Image source={foregroundImage} style={styless.tinyLogo} />
      <View style={{ height: 440 }}/>

      {/* <CustomButton
        navFunc={() => navigation.navigate("Login")}
        buttonText={"Let's go!"}
      /> */}

      <View style={{ paddingLeft: 50, paddingRight: 50, width: "100%"}}>
        <TouchableHighlight
          style={[ 
            styles.buttonLanding, {
            borderRadius: 10,
            backgroundColor: "#5D576B",
            padding: "10px",
            width: "100%",},
          ]}
          onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>{"Let's go!"}</Text>
        </TouchableHighlight>
      </View>

    </View>
  );
}
