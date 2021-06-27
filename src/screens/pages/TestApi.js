import React, {useState} from 'react';
import {View,Text, TextInput, Button} from 'react-native';
import axios from 'axios';

const  RegisterPage = () => {
​
const [email, setEmail] = useState ('');
const [password, setPassword] = useState('')
const [name, setName] = useState('');

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [name ,setName] = useState('names')
    return(       
        <View>   
            <Text>{name}</Text> 
            <TextInput
          
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={ (text) => setEmail(text)}
          value={email}
        />
​
        <TextInput
         
          
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(pswrd) => setPassword(pswrd)}
          value={password}
        />
            <Button onPress={ ()=>
axios.post('http://192.168.43.195:5000/api/admin/register',
{
  email: email,
  password: password,
})
.then(function (response) {
  // handle success
  console.log(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
})
           } title="Click"></Button>
        </View>   
    )
}
​
export default RegisterPage;