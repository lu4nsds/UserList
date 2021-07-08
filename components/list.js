import React, {useEffect, useState, useCallback} from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, Image, ActivityIndicator} from 'react-native';
const axios = require('axios');

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#ddd',
    },
    itemImage: {
      width: 50,
      height: 50,
      marginRight: 16,
      borderRadius: 12,
    },
    content: {
      justifyContent: 'space-around',
    },
    name: {
      fontSize: 16,
    },  
    email: {
      color: '#777',
    },
    loader:{
      marginVertical: 16,
      alignItems: 'center',
    }
  });

export default function List() {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(()=>{
    getUsers()
  }, [currentPage])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setUsers([])
      getUsers()
      setRefreshing(false)
    });
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const getUsers = () => {
    setIsLoading(true)
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
    .then(res => {
      //setUsers(res.data.results)
      setUsers([...users, ...res.data.results])
      setIsLoading(false)
    })
 }

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.picture.large}} style={styles.itemImage}/>
        <View style={styles.content}>
          <Text style={styles.name}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    )
  }

  const renderLoader = () => {
    return (
      isLoading ? 
      <View style={styles.loader}>
        <ActivityIndicator size='large' color='#aaa'/>
      </View> : null
    )
  }

  const loadMoreItem = () => {
      setCurrentPage(currentPage + 1)
  }
  

    return (
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}  
        onEndReached={() => loadMoreItem()} 
        onEndReachedThreshold={0.01} 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />     
    )
}