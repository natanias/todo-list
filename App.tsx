import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import Tarefa from "./src/components/Tarefa";
import { MenuPrincipal } from "./src/components/MenuPrincipal";
import { LogoBar } from "./src/components/LogoBar";
import { InputTarefa } from "./src/components/InputTarefa";
import React, { useState } from "react";
import { Adicionar } from "./src/components/Adicionar/Butt";
import { Tab } from "react-tabs";
import { BotSelc } from "./src/components/Adicionar/estilo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);

  function handleCheck() {
    setStatus(!status);
  }
  function handleNavigate() {
    console.log("deveria navegar");
  }
  function handleShow() {
    setShow(!show);
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.containerMain}>
        <LogoBar />
        <MenuPrincipal />
        <Tarefa
          title={"Tarefa teste"}
          status={status}
          show={show}
          onCheckPress={handleCheck}
          onShowPress={handleShow}
          onTaskPress={handleNavigate}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <InputTarefa />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerMain: {
    flex: 1,
    alignItems: "center",
  },
  footer: {
    alignSelf: "flex-end",
    marginBottom: wp("5%"),
    marginRight: wp("5%"),
  },
});
