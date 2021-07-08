import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: 'white',
    },
  });

export default function MyContainer(props) {
    return (
      <View style={styles.container}>
        {props.children}
      </View>
    );
}