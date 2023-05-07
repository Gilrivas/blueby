import { View } from 'react-native'
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';

const CustomCheckbox = () => {
    const [isChecked, setChecked] = useState(false);
  return (
    <View>
         <Checkbox value={isChecked} onValueChange={setChecked} />
    </View>
  )
}



 

export default CustomCheckbox