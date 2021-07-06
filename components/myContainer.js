import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: Dimensions.get('window').height,
      backgroundColor: '#c9c9c9',
    },
  });

export default function MyContainer({children}) {
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
}