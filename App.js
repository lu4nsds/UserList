import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, RefreshControl, ScrollView, StatusBar} from 'react-native';
import MyContainer from './components/myContainer';
import Header from './components/header';
import List from './components/list';
//primaryColor: #f2b10c
//secondaryColor: #242c39
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  return (
    <MyContainer>
      <StatusBar backgroundColor="#242c39"/> 
      <Header/>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <List/>
      </ScrollView>
    </MyContainer>
  );
}


