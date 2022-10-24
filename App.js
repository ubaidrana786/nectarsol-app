import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AllServices, SignUp } from "./screens";
import { LogIn } from "./screens";
import { Home } from "./screens";
import { ForgotPassword } from "./screens";
import { Search } from "./screens";
import { Reffer } from "./screens";
import { Scan } from "./screens";

import Tabs from "./navigation/tabs";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};
const Stack = createStackNavigator();
const App = () => {


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Home}
      >
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign Up", headerShown: false }}
        />
        <Stack.Screen
          name="Reffer"
          component={Reffer}
          options={{ title: "Reffer", headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Reset Password", headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search", headerShown: false }}
        />
         <Stack.Screen
          name="AllServices"
          component={AllServices}
          options={{ title: "AllServices", headerShown: false }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ title: "Scan", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ title: "Home", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;