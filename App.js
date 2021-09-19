import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import app from "./firebase/config";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import the page functions from their respective JS files
import LandingPage from "./pages/LandingPage.js"
import LoginPage from "./pages/LoginPage.js"
import SignUpPage from "./pages/SignUpPage.js"
import HomePage from "./pages/HomePage.js"
import WardrobePage from "./pages/WardrobePage.js"
import UploadPage from "./pages/UploadPage.js"
import UploadSuccessPage from "./pages/UploadSuccessPage.js"
import ComparisonPage from "./pages/ComparisonPage.js"

import StyleGuideText from "./assets/style_guide_text.png";
import HomeIcon from "./assets/home_icon.png";
import HangerIcon from "./assets/hanger_icon.png";
import UploadIcon from "./assets/upload_icon.png";

// Stack navigator to navigate between different pages
const Stack = createNativeStackNavigator();

// Tab navigator to let the user move between different pages
const Tab = createBottomTabNavigator();

function TabComponent() { 
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size }) => {
          let imageObj = "";
          
          const tabToImage = {
            "HomeTab": HomeIcon,
            "UploadTab": UploadIcon,
            "NavigationTab": HangerIcon,
          }
          
          if (route.name in tabToImage) {
            imageObj = tabToImage[route.name]
          } else {
            imageObj = "";
          }

          return <Image src={imageObj}/>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage}/>
      <Tab.Screen name="Upload" component={UploadPage}/>
      <Tab.Screen name="Wardrobe" component={WardrobePage}/>

    </Tab.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = 'Landing'
        screenOptions={{headerShown: false}}
        >
        {/* List of all pages in the app */}
        
        <Stack.Screen
            name="Landing"
            component={LandingPage}
          />
        <Stack.Screen
            name="Login"
            component={LoginPage}
          />
        <Stack.Screen
            name="Comparison"
            component={ComparisonPage}
          />
        <Stack.Screen
            name="Tabs"
            component={TabComponent}
          />
        <Stack.Screen
            name="Upload Success"
            component={UploadSuccessPage}
          />
        <Stack.Screen
            name="Sign Up"
            component={SignUpPage}
          />
          {/* <Stack.Screen
              name="Home"
              component={HomePage}
            />
          <Stack.Screen
              name="Wardrobe"
              component={WardrobePage}
            />
          <Stack.Screen
              name="Upload"
              component={UploadPage}
            /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;