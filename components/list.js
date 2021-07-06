import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const users = [
    {
      id: '0',
      title: 'Luan Santos',
    },
    {
      id: '1',
      title: 'Gésio de Moura',
    },
    {
      id: '2',
      title: 'Matheus Vinicius',
    },
  ];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        width: '100%',
        marginVertical: 2,
    },
  });

export default function List() {
    const Item = ({ title }) => (
        <View style={styles.item} >
          <Text>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
 
    return (
      <View>
        <FlatList 
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      </View>
    );
}