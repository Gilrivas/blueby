import { Pressable, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


const CustomButton = ({text , onPress}) => {

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container:{
      backgroundColor: '#D9D9D9',
      width: '80%',
      padding: 15,
      marginVertical: 5,
      borderRadius: 20,
      alignItems: 'center',
    
    },
    text: {
        color: 'black',
        fontFamily: 'Inter',
       
    },
  });
  

export default CustomButton