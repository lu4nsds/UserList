import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, RefreshControl, ScrollView, StatusBar} from 'react-native';
import MyContainer from './components/myContainer';
import Header from './components/header';
import List from './components/list';
const axios = require('axios');
//primaryColor: #f2b10c
//secondaryColor: #242c39
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  
  
  return (
    <MyContainer>
      <StatusBar backgroundColor="#242c39"/> 
      <Header/>
      <List/>
    </MyContainer>
  );
}


