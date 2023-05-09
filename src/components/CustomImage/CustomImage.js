import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const CustomImage = ({source, name}) => {
  return (
    <View style={styles.container}>
        <Image source={source} style={styles.logo} />
        <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },

    text:{
        color: 'white',
        marginVertical: 10,
        fontSize: 12,
        
    },
  
    logo:{
      width: 100,
      height: 100,
      borderRadius: 50,
    }
   
  });
  
export default CustomImage