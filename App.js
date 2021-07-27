import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import HomePage from './components/todoApp/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/todoApp/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <HomePage />

      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
