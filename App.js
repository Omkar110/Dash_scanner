import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import QR from "./screen/QR";
import DocumentConverter from "./screen/DocumentConverter";
import ImageBrowser from "./screen/ImageBrowser";
import Scan from "./screen/qr scanner/Scan";
import ShowQR from "./screen/qr scanner/ShowQR";
import ShowText from "./screen/qr scanner/ShowText";
import GetText from "./screen/qr scanner/GetText";
export default class App extends React.Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator headerMode="none">
          {/* Login Screens */}
          {/* <stack.Screen name="Login" component={Login} /> */}
          {/* <stack.Screen name="Signup" component={Signup} /> */}

          {/* Main Screen */}
          <stack.Screen name="home" component={Home} />
          <stack.Screen name="QR" component={QR} />
          <stack.Screen
            name="DocumentConverter"
            component={DocumentConverter}
          />

          <stack.Screen name="ImageBrowser" component={ImageBrowser} />

          {/* Qr Scanner */}
          <stack.Screen name="Scan" component={Scan} />
          <stack.Screen name="ShowText" component={ShowText} />
          <stack.Screen name="GetText" component={GetText} />
          <stack.Screen name="ShowQR" component={ShowQR} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  navigation: {
    backgroundColor: "#37383C",
    width: "100%",
    height: "7%",
    position: "absolute",
    bottom: 0,
  },
});
