import { View, Text, StyleSheet } from 'react-native'
import { useState } from 'react'

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomCheckbox from '../../components/CustomCheckBox/CustomCheckbox'


const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({ name, email, password })
    };
  
    try {
      const response = await fetch('http://192.168.1.34:3000/SignUp', requestOptions);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}> 

      <Text style={styles.title}>Allons y, ton futur Blueby t’attends</Text>

      <CustomInput placeholder='Prenom' value={name} setValue={setName} />
      <CustomInput placeholder='Email' value={email} setValue={setEmail} />
      <CustomInput placeholder='Mot de passe' value={password} setValue={setPassword} secureTextEntry={true} />
      <CustomInput placeholder='Confirmation de mot se passe' secureTextEntry={true} />
      <CustomInput placeholder='Date de naissance' />

     
      <View style={styles.flex}>
      <CustomCheckbox /> 
      <Text style={styles.text}>Tu acceptes que nous puissions t’envoyer des mails avec les dernières fonctionnalités, informations concernant à ta compte et également des offres et idées des nos partenaires; pour vivre une expérience magique </Text>
      </View>
      <CustomButton text="Creer une compte"  onPress={handleSubmit}/>

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
      fontSize: 14,
      
  },
  flex:{
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
  }
 
});


export default SignUpScreen