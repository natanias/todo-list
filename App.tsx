import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{flex:1}}>
      <StatusBar style="auto" />
      <HomeScreen/>
      </GestureHandlerRootView>
    </>
  );
}