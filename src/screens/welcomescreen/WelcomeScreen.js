import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';

const WelcomeScreen = () => {
  const [loaded] = useFonts({
    Inter: require('../../../assets/fonts/Inter.ttf'),
    Inter_Bold: require('../../../assets/fonts/Inter-ExtraBold.ttf'),
    Inter_Light: require('../../../assets/fonts/Inter-Light.ttf'),
  });

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Blueby</Text>

      <Text style={styles.text}>Ton app intelligente dédié pour  avoir tout tes Crushs plus proche de toi </Text>

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
        width: "100%",
        height: "100%",
        backgroundColor: '#0984E3',
        alignItems: 'center',
      justifyContent: 'center',
    },

    logo:{
        color: 'white',
        marginVertical: 10,
        fontSize: 34,
        
        fontFamily: 'Inter_Bold',
    },

    text:{
        width: '80%',
        color: 'white',
        marginVertical: 15,
        fontSize: 14,
        fontFamily: 'Inter_Light',
        textAlign: 'center',
        
    },

  });

export default WelcomeScreen