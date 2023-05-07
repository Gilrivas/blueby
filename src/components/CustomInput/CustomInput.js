import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text} placeholder={placeholder}></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      width: '80%',
      padding: 15,
      marginVertical: 5,
      borderBottomWidth: 0.5,
      borderBottomColor: 'black',
      
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
  });

export default CustomInput