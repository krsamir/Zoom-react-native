import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home";
import MeetingRoom from "./Screens/MeetingRoom";
const Stack = createStackNavigator();
export default function Navigation() {
  //   { Navigator, Screen }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ gestureDirection: "horizontal", headerShown: false }}
        />
        <Stack.Screen
          name="Room"
          component={MeetingRoom}
          options={{
            gestureDirection: "horizontal",
            title: "Start a meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
