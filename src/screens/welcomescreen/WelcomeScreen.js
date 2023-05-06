import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {

const navigation = useNavigation();

const onSignInPressed = () => {
    navigation.navigate('SignIn')
}

const onSignUpPressed = () => {

    navigation.navigate('SignUp')
}

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Blueby</Text>

      <Text style={styles.text}>Ton app intelligente dédié pour  avoir tout t’es Crushs plus proche de toi </Text>

      <Text style={styles.text}>Nous avons implémenté la AI pour te montrer les gens qui t’intéressent vraiment et protéger ton intimité.</Text>

      <CustomButton text="CREER UNE COMPTE" onPress={onSignUpPressed} />

      <CustomButton text="SE CONNECTER" onPress={onSignInPressed} />

      
      <Text style={styles.text}>En créant une compte chez nous, nous utilisons t’es données pour améliorer ton expérience, et te proposer des choses pertinents, nous allons jamais te montrer de publicité invasive, et nous n’allons pas partager tes données.</Text>
      <Text style={styles.text}>Ta sécurité et privacité est le plus important pour nous.</Text>
      <Text style={styles.text}>Merci de nous faire confiance</Text>
    </View>

  
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      backgroundColor: '#0984E3'
    },

    logo:{
        color: 'white',
        marginVertical: 15,
        fontSize: 34,
        fontWeight: 'bold',
    },

    text:{
        color: 'white',
        marginVertical: 10,
        fontSize: 12,
        
    }
   
  });

export default WelcomeScreen