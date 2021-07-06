import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
      display: 'flex',  
      height: Dimensions.get('window').height * 0.10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2b10c',
    },
    textHeader: {
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

export default function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>
            User List
        </Text>
      </View>
    );
  }