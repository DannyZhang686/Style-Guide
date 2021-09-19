import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles, StyledButton, FormText, Container} from "../assets/styles.js";
import {Camera} from 'expo-camera';
// import {RNCamera} from 'react-native-camera';

export default function UploadPage({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
  // <View styles={styles.container}>
    <Camera style={styles.camera} type={type}>
      {/* <View style={styles.buttonContainer}> */}
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
          <Text style={styles.text}> Flip </Text>
        </TouchableOpacity>

        {/* <Camera ref={ref => { this.camera = ref; }}/>;

        snap = async () => {
          if (this.camera) {
            let photo = await this.camera.takePictureAsync();
          }
        }; */}
      {/* </View> */}
    </Camera>
  // </View>
  );
};