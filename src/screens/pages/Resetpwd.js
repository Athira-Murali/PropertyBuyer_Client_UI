import React, { Component, Profiler,useState,useEffect } from 'react';
import { Text,View,SafeAreaView,StyleSheet,Image, TouchableOpacity,TextInput, ToastAndroid, ScrollView,} from 'react-native';
 import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../config/colors'
import ButtonTile from '../../components/Button_tile';

const  ResetPage = () => {
  const navigation = useNavigation();
//   const [current, setEmail] = useState ('');
  const [password, setPass] = useState('')
  const [confirmpwd, setconfirmpwd] = useState('');
 
  const [hidePass, setHidePass] = useState(true);
  const [hideconfim, setHideconfirm] = useState(true);

return (
    <View style={{flex:1,backgroundColor:colors.background,}}>


      
          <Text style={{marginLeft:16,fontSize:25,fontWeight:'700',color:'#013220',padding:25}}>Reset Password</Text>
        
               
       {/* Edited field      */}
       <View style={styles.whiteContainer}>

       
               
      {/* password field */}
         
      <Text  style={styles.text}>New password</Text>
              <View  style={styles.sectionStyle}>
              <TextInput
                    onChangeText={(val) => setPass(val)}
                    placeholder='enter new password'
                    returnKeyType='go'
                    secureTextEntry={hidePass ? true : false}
                    autoCorrect={false}
                    style={styles.textinput}
                  />
              <TouchableOpacity  style={styles.touachablepassword} >
              <Icon
              name={hidePass ? 'eye-slash' : 'eye'}
              size={15}
              style={styles.icon}
              onPress={() => setHidePass(!hidePass)}
            />
              </TouchableOpacity>
              
                </View> 
              
                <Text style={styles.text}>confirm password</Text>
               <View  style={styles.sectionStyle}>
               <TextInput
                    onChangeText={(val) =>setconfirmpwd(val)}
                    placeholder='enter password'
                    returnKeyType='go'
                    secureTextEntry={hideconfim ? true : false}
                    autoCorrect={false}
                    style={styles.textinput}
                  />
              <TouchableOpacity  style={styles.touachablepassword} >
              <Icon
              name={hideconfim ? 'eye-slash' : 'eye'}
              size={15}
              style={styles.icon}
              onPress={() => setHideconfirm(!hideconfim)}
            />
              </TouchableOpacity>
              </View> 


        

          <View style={{alignItems:'center',marginVertical:10}}>
                  <ButtonTile title="Reset Password"   />

                  </View>
        </View>

             

            


    </View>

)
};

export default ResetPage;

const styles = StyleSheet.create({
  whiteContainer:{
  
    paddingTop:50
  },
 
text:{
    marginHorizontal:30,
   color:colors.secondary,
     
  },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      margin: 10,
    },

textinput:{
    flex:1,
    padding:10,
    marginLeft:16,
    marginRight:16,
    borderBottomWidth:1,
    borderBottomColor:'#013220',
  },
  bottomview:{
      marginVertical:40,
      alignSelf:'center',
   },
  //password show and hide     
touachablepassword: {
    position: 'absolute',
    right: 20,
    height: 40,
    width: 35,
    padding: 1,
 
  },
icon: {
color:colors.secondary,
height: '100%',
width: '100%',

},
 
        
        
 

});