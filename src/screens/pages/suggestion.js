import React,{useState} from 'react';
import {Component} from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image,StatusBar,TextInput} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../config/colors';


import Header from '../../components/PropertyViewHeader';
const Suggestion = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <Modal
        isVisible={true}
        style={{margin:0}}
        backdropOpacity={0.0}>

             <View style={styles.container}>
         {/* header */}
         <Header text="Suggestion"/>
             

        <View style={styles.centeredview1}>
             
                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Name</Text>
                         <TextInput style={styles.placeholderstyle}
                            placeholder= "John Smith"
                             placeholderTextColor={Colors.secondary}>
                           </TextInput>
                     </View>


                     <View style={styles.input}>
                         <Text style={styles.Textstyle}>Email Address</Text>  
                         <TextInput style={styles.placeholderstyle}
                           
                           placeholder= "jsmith@example.com"
                           placeholderTextColor={Colors.secondary}/>

                           
                    </View>

     <View style={styles.inputsug}>
            <Text style={styles.Textstyle}>Suggestion:</Text>
            <TextInput style={styles.placeholdersug}
            placeholderTextColor={Colors.secondary}
         placeholder= {"Nulla Lorem mollit cupidatat irure.Laborum maggna\n nulla duis ullamco illum dolor.Voluptate exercitation\n incididunt aliquip deserunt reprehenderit elit"}
           />
    </View>

         <View style={styles.suggButtonContainer}>
                <TouchableOpacity style={styles.reset}>
                <Text style={styles.resetbtn}>Reset</Text>
                </TouchableOpacity>

       
            <TouchableOpacity  style={styles.btnsub}>
            <Text style={styles.subtext}>Submit</Text>
            </TouchableOpacity>
        </View>
       
    
   
    

    </View>
    {/* container */}

</View>
</Modal>
    );
};

export default Suggestion;
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.background,
        flex:1,
    },


input:{
        margin:10,
        marginLeft:16,
        height:52,
        borderColor:Colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: Colors.background,
        width:300,
       

    },
    inputsug:{
        
        height:230,
        borderColor:Colors.secondary,
        borderRadius:12,
        borderWidth:1,
        backgroundColor: Colors.background,
        width:300,
        marginLeft:16,
     
},
    Textstyle:{
        fontWeight:'bold',
        textAlign:'justify',
        color:Colors.secondary,
        paddingLeft:14,
        paddingTop:4,
        fontSize:15
        

    },
    placeholderstyle:{
        textAlign:'justify',
        paddingLeft:14,
        paddingTop:1
 },
    placeholdersug:{
    textAlign:'justify',
       padding:10


    },
    centeredview1:{
        alignSelf:'center',
        padding:10, 
         marginLeft:16,
        marginRight:16,
        borderRadius: 14,
        elevation:2,
        backgroundColor:'#DAE1DF',
        marginTop:25
    },

    suggButtonContainer:{
         alignSelf:'flex-end',
        flexDirection:'row',
        justifyContent:'space-between',
           
    },
    resetbtn:{
            left:20,
            color:Colors.buttonColor,
            padding:4,
            fontWeight:'bold',
            fontSize:18
    },
    reset:{
        borderRadius:12,
        borderWidth:1,
       borderColor:Colors.buttonColor,
        margin:15,
        width:100,
        height:36,
        marginHorizontal:25
    },
    btnsub:{
          
            borderRadius:12,
            backgroundColor:Colors.buttonColor,
           margin:15,
            width:120,
            height:36,
        },

    subtext:{
                color:Colors.secondary,
                padding:4,
                left:29,
                fontWeight:'bold',
                fontSize:18,
                color:'white'
    }

});