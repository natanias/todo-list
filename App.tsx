import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Routes from "./src/routes";
import Loading from "./src/components/Loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <NavigationContainer>
      {fontsLoaded ? <Routes /> : <Loading />}
    </NavigationContainer>
  );
}
