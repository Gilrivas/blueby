import { View, Text, StyleSheet } from 'react-native'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomCheckbox from '../../components/CustomCheckBox/CustomCheckbox'


const SignUpScreen = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Allons y, ton futur Blueby t’attends</Text>

      <CustomInput placeholder='Prenom' />
      <CustomInput placeholder='Email' />
      <CustomInput placeholder='Mot de passe' />
      <CustomInput placeholder='Confirmation de mot se passe' />
      <CustomInput placeholder='Date de naissance' />

     

      <CustomCheckbox /> 

      <Text style={styles.text}>Tu acceptes que nous puissions t’envoyer des mails avec les dernières fonctionnalités, informations concernant à ta compte et également des offres et idées des nos partenaires; pour vivre une expérience magique </Text>
      <CustomButton text="Creer une compte" />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      width: "100%",
      height: "100%",
      backgroundColor: '#0984E3',
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
      
  }
 
});


export default SignUpScreen