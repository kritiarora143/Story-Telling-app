import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import * as firebase from "firebase";
// import { firebaseConfig } from "./config";

const firebaseConfig = {
  apiKey: "AIzaSyCPL26YRNnlCFrJmFy9w_7G28rtmmAB8_4",
  authDomain: "storytelling-197fa.firebaseapp.com",
  databaseURL: "https://storytelling-197fa-default-rtdb.firebaseio.com",
  projectId: "storytelling-197fa",
  storageBucket: "storytelling-197fa.appspot.com",
  messagingSenderId: "203927566347",
  appId: "1:203927566347:web:dea298b6bd28c6c176ef0e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
