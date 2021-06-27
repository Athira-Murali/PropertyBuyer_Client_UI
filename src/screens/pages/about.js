import React from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';
import Header from '../../components/PropertyViewHeader';

const About = ({navigation}) => {
return(
  <Modal
          isVisible={true}
          style={{margin:0}}
          backdropOpacity={0.0}>

          <View style={styles.container}>
       
         {/* header */}
         <Header text="About"/>

          
          <View style={styles.centeredView1}>
              <View  style={styles.whiteContainer}>
                <Text style={styles.aboutContent}>
                    Physiological   respiration  involves  the  mechanisms  that  ensure  that  the  
                    composition  of  the  functional  residual  capacity  is  kept  constant,  and 
                    equilibrates  with  the  gases  dissolved in the pulmonary capillary blood, and 
                    thus throughout the body. Thus, in precise usage, the words breathing and ventilation 
                    are hyponyms, not synonyms, of respiration; but this prescription is not consistently 
                    followed, even by most health care providers, because the term respiratory rate (RR) is 
                    a well-established term in health care, even though it would need to be consistently
                      replaced with ventilation rate if the precise usage were to be followed.</Text>
              </View>

                    
                   
                
          </View> 

                  <View style={{marginVertical:150}}>

                  </View>
                  
                  </View>
</Modal>
          
    
     );
};

export default About;
const styles = StyleSheet.create({
container:{
          flex:1,
        backgroundColor: Colors.background,
      },
centeredView1: {
  height:'100%',
  width: '100%',
  alignSelf:'center',
  padding:10, 
   marginLeft:16,
  marginRight:16,
  borderRadius: 14,
  marginTop:25,

      
      },
aboutContent:{
        fontSize:15,
        lineHeight: 30,
        color:Colors.secondary,
        textAlign:'justify'
      },
whiteContainer:{
          borderRadius: 14,
        backgroundColor:'#DAE1DF',
        padding:20,
        elevation:2

      }
});