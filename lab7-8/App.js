import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
