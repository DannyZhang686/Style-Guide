import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  
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
  // font-weight: 500;
`;

export const Button = styled.Button`
  border-radius: 30px; 
  background-color: #5D576B;
  padding: 10px;
  font-size: 40px;  
  color: #F4E9E9;
`;

export const FormText = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #5D576B;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #5D576B;
`;