import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import uuid from 'uuid-random'
import AddItem from './components/AddItem';

const App = () => {

  const [items, setItems] = useState([])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter something!!', [
        { text: "OK"}
        ],
        );
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems]
      })
      
    }
    

  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem
        addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) =>
        (<ListItem
          item={item}
          deleteItem={deleteItem}
        />)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20

  },
});

export default App;
