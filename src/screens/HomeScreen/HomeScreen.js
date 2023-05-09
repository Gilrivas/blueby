import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Rectangle from '../../../assets/images/Rectangle.png'
import CustomImage from '../../components/CustomImage/CustomImage'


const Home = () => {
  return (
    <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.title}>Blueby</Text>
        
      <View>
        <CustomImage source={Rectangle} name={'sebas'}/>

      </View>
    </View>

    <View style={styles.body}>

      <CustomImage source={Rectangle} name={'ququ'}/>
      <CustomImage source={Rectangle} name={'kiki'}/>
      <CustomImage source={Rectangle} name={'hihi'}/>

    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header:{
      width: "100%",
      
      backgroundColor: '#0984E3',
      alignItems: 'center',
      justifyContent: 'center'
   
  },
  body:{
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
   
  },

  title:{
      color: 'white',
      marginVertical: 15,
      fontSize: 34,
      fontWeight: 'bold',
  },

  text:{
      color: 'white',
      marginVertical: 10,
      fontSize: 12,
      
  },



});
export default Home