import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { theme } from "./src/theme";
export default function App() {
  const [fontesLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  return (
    <View style={styles.container}>
      {!fontesLoaded ? <Home /> : <ActivityIndicator size={50} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
});
