import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Button} from "react-native";

export const styles = StyleSheet.create({
  FormInput: {
    color: "red",
  },
  TextInput: {
    backgroundColor: "#F1DEDE",
    color: "#F1DEDE",
  },
  buttonLanding: { 
    width: "100px",
    height: "50px",
    borderRadius: "50px", 
    backgroundColor: "#5D576B",
    padding: "10px",
  },
  buttonText: {
    fontSize: "20px",
    color: "#F4E9E9",
    textAlign: "center",
    padding: 0,
    margin: 0
  },
  FormText: {
    fontSize: "20px",
    textAlign: "left",
    color: "#5D576B",
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  }, 
  input: {
    width: 200,
    height: 40,
    color: "#F4E9E9",
    backgroundColor: "#F4E9E9",
    border: "2px solid #5D576B",
    borderRadius: 10,
    padding: 20,
  }, 

  container: {
    // flex: 1,
    // width: "100%",
    // height: "100%",
    paddingLeft: 50,
    paddingRight: 50,
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    width: "100%",
    height: "100%",
  },
}) 

export const Container = styled.View`
  flex: 1;
  background-color: #F1DEDE;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins';
  margin-left: 10px;
  margin-right: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #5D576B;
`;

export const StyledTextInput = styled.TextInput`
  background-color: "#F1DEDE",
  color: "#F1DEDE";
  border-radius: 40px;
`;

export const StyledButton = styled.Button`
  border-radius: 40px; 
  width: 100px;
  height: 90px;
  background-color: "#5D576B";
  color: "#F4E9E9";
  padding: 20px;
  font-size: 40px;
`;

export const FormText = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #5D576B;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #5D576B;
  margin-bottom: 40px;
`;