import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Title,
} from "../assets/styles.js";

import CustomButton from "../components/CustomButton.js";
import CheckmarkImage from "../assets/check_mark.png";

export default function UploadSuccessPage({navigation}) {
  return (
    <Container>
      <Image source = {CheckmarkImage} style={{height: 150, width: 150}}/>
      <Title style={{paddingTop: "30px", textAlign: "center", lineHeight: "50px"}}>
        Photo saved to your wardrobe!
      </Title>
      <CustomButton navFunc={navigation.navigate("Tabs")} buttonText={"Continue"}/> 
    </Container>
  );
};