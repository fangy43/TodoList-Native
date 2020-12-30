import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const Header = ({title})=> {
  return (
    <View style={styles.header}>
      <Text style = {styles.text}>{title}</Text>
      
    </View>
  );
}

Header.defaultProps={
    title : 'My Todo List'
}


const styles = StyleSheet.create({
  header: {
    height : 60,
    padding : 15,
    backgroundColor: 'black'
    
  },
  text:{
    fontSize: 24,
    color: 'white',
    textAlign:'center'
  }
});

export default Header;