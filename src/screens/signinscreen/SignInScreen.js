import { View, Text, StyleSheet} from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useState } from 'react'

const SingInScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authToken, setAuthToken] = useState(null);

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password
    };
    const response = await fetch('http://192.168.1.34:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`  
      },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const { token } = await response.json(); // asumiendo que el servidor devuelve el token en la respuesta
      setAuthToken(token);
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  };


  return (
    <View style={styles.container}> 
    
      <Text style={styles.title}>Tu nous avez manqué et t’es Bleuby’s aussi </Text>

      <CustomInput placeholder='Email' value={email} setValue={setEmail}/>

      <CustomInput placeholder='Mot de passe' value={password} setValue={setPassword} secureTextEntry={true}/>

      <CustomButton text="SE CONNECTER" onPress={handleSubmit} />
  
      <Text style={styles.text}>N’oubliez pas, que nous sommes là pour toi, pour t’offrir une service de qualité, et que tu sois plus épanoui dans ta vie</Text>

      <Text style={styles.text}>Invite tes amis pour plus fun, et faire grandir le grand cœur bleu qui nous sommes !!!</Text>

      <Text style={styles.text}>On t’aime tel comme tu es !!! </Text>

    
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


export default SingInScreen