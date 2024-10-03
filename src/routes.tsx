import React, { Children } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Inicil/telainit";
import Calendario from "./pages/Calendario/telacalend";
import Perfil from "./pages/Perfil/telaper";
import Tempo from "./pages/Tempo/telafoc";
<<<<<<< HEAD
import {
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import FloatingActionButton from "./components/FloateButton/buttonflu";
=======
import { Entypo, Feather, MaterialIcons, FontAwesome } from "@expo/vector-icons";
>>>>>>> 5d5b8e25e62539d1480807f3b81001993ecf0307

// Cria o navegador de abas
const Tab = createBottomTabNavigator();

<<<<<<< HEAD
type Props = {
  Title: string;
  Children: string;
  onFanPress: () => void;
};

=======
/**
 * Componente principal de rotas do aplicativo.
 * 
 * @returns {JSX.Element} O componente de navegação por abas.
 */
>>>>>>> 5d5b8e25e62539d1480807f3b81001993ecf0307
export default function Routes() {
  const handleFabPress = () => {
    alert("");
  };
  return (
<<<<<<< HEAD
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
          name="Inicil"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Calendario"
          component={Calendario}
          options={{
            tabBarIcon: ({ size , color }) => (
              <MaterialIcons name="calendar-today" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="ADD"
          component={Calendario}
          options={{
            tabBarLabel: '',
            

            tabBarIcon: ({ size, color }) => (
              <FloatingActionButton onPress={(_Home: any) => console.log('Botão Pressionado!')} />
            ),
          }}
        />

        <Tab.Screen
          name="Tempo"
          component={Tempo}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="clock-o" size={size} color={color} />
            ),
          }}
        />
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
    </View>
=======
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
>>>>>>> 5d5b8e25e62539d1480807f3b81001993ecf0307
  );
}