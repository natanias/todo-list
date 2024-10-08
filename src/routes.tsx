import React, { useState } from "react";
import { StatusBar, View, Modal, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home/home";
import Calendario from "./pages/Calendario/telacalend";
import Perfil from "./pages/Perfil/telaper";
import Tempo from "./pages/Tempo/telafoc";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import FloatingActionButton from "./components/FloateButton/buttonflu";
import { BottonAdicionar } from "./components/BottonAdicionar/adicionar";

const Tab = createBottomTabNavigator();

export default function Routes() {
  const [isVisible, setIsVisible] = useState(false);

  const handleFabPress = () => {
    
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#c1bec5",
          tabBarInactiveTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#13a8ec",
            height: 76,
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          },
          tabBarLabelStyle: {
            marginBottom: 10,
            fontSize: 18,
          },
        }}
      >
        <Tab.Screen
          name="Inicial"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        
        <Tab.Screen
          name="Calendario"
          component={Calendario}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="calendar-today" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

        
        <Tab.Screen
          name="ADD"
          component={Home} 
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <FloatingActionButton onPress={handleFabPress} />
            ),
            headerShown: false,
          }}
        />

        {/* Tela de Tempo */}
        <Tab.Screen
          name="Tempo"
          component={Tempo}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="clock-o" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />

     
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>

      <BottonAdicionar isVisible={isVisible} onClose={handleCloseModal} />

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}
