import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Inicil/telainit";
import Calendario from "./pages/Calendario/telacalend";
import Perfil from "./pages/Perfil/telaper";
import Tempo from "./pages/Tempo/telafoc";
import {Entypo, Feather, MaterialIcons, FontAwesome} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

type Props = {
  Title: string;
  stilos: string;
};

export default function Routes() {
  return (
    <Tab.Navigator  screenOptions={{
      tabBarActiveTintColor: '#6200ee', 
      tabBarInactiveTintColor: '#888',  
      tabBarStyle: { backgroundColor: '#000' }, 
    }}
    
     
    >
      <Tab.Screen 
      name="Inicil" 
      component={Home} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="home" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Calendario" 
      component={Calendario} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="calendar-today" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen
       name="Tempo" 
       component={Tempo}
       options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="clock-o" size={size} color={color} />
        )
      }}
        />
      <Tab.Screen 
      name="Perfil" 
      component={Perfil} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome name="user" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
}
