import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Inicil/telainit";
import Calendario from "./pages/Calendario/telacalend";
import Perfil from "./pages/Perfil/telaper";
import Tempo from "./pages/Tempo/telafoc";
import { Entypo, Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";

// Cria o navegador de abas
const Tab = createBottomTabNavigator();

/**
 * Componente principal de rotas do aplicativo.
 * 
 * @returns {JSX.Element} O componente de navegação por abas.
 */
export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee', // Cor do ícone ativo
        tabBarInactiveTintColor: '#888',   // Cor do ícone inativo
        tabBarStyle: { backgroundColor: '#000' }, // Estilo do fundo da barra de abas
        tabBarLabelStyle: { fontSize: 12 }, // Estilo do texto da aba
      }}
    >
      {/* Tela Inicial */}
      <Tab.Screen 
        name="Inicial" 
        component={Home} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          // accessibilityLabel: 'Tela Inicial', // Adicione se necessário
        }}
      />

      {/* Tela de Calendário */}
      <Tab.Screen 
        name="Calendario" 
        component={Calendario} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          ),
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
        }}
      />

      {/* Tela de Perfil */}
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}