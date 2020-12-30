import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddItem = ({ addItem }) => {

  const [text, setText] = useState('');
  const onchange = textValue => setText(textValue);

  return (
    <View >
      <TextInput
        placeholder='Add Todo'
        style={styles.input}
        onChangeText={onchange}
        value={text}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}
          onPress={() => {
            addItem(text)
            setText('')
          }}>
          <Icon name='plus' size={20} />
            Add
          </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: 'green',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default AddItem;