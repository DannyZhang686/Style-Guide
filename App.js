import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Import the page functions from their respective JS files
import LandingPage from "./pages/LandingPage.js"
import LoginPage from "./pages/LoginPage.js"
import SignUpPage from "./pages/SignUpPage.js"
import HomePage from "./pages/HomePage.js"
import WardrobePage from "./pages/WardrobePage.js"

// Stack navigator to navigate between different pages
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Remove the default header from the pages */}
        <Stack.Group screenOptions={{headerShown: false}}>
          {/* List of all pages in the app */}
          
          <Stack.Screen
              name="Login"
              component={LoginPage}
            />
          <Stack.Screen
              name="Sign Up"
              component={SignUpPage}
            />
          <Stack.Screen
              name="Landing"
              component={LandingPage}
            />
          <Stack.Screen
              name="Home"
              component={HomePage}
            />
          <Stack.Screen
              name="Wardrobe"
              component={WardrobePage}
            />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;