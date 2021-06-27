import React,{useState} from "react";
import {View,StyleSheet,TouchableOpacity,Text,Dimensions,TextInput} from 'react-native';
import Colors from '../../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIons from 'react-native-vector-icons/EvilIcons'
import { SliderBox } from "react-native-image-slider-box";
import { Divider } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import Modal from 'react-native-modal';
import Header from '../../components/PropertyViewHeader';

const PropDetails = () =>
{
    const Width = Dimensions.get("window").width;
    const Height = Dimensions.get("window").height * 0.25;
    const [modalVisible, setModalVisible] = useState(false);
    const Images = [
       require('../../assets/images/banner2.jpg'),
       require('../../assets/images/banner1.jpg'),
       require('../../assets/images/banner2.jpg'),
       require('../../assets/images/banner1.jpg'),
      ];
    return(
        <View style={styles.mainContainer}>
            <ScrollView>
            <Header text=""/>
            <View style={styles.container}>
                            <Text style={styles.propertyText}>PropertyID : BR099857</Text>
                            
                                 {/* Imageslider starts   */}

                <View style={{alignSelf:'center', height: Height,position:'relative',}}>
                <SliderBox 
                    images={Images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#90A4AE"
                    autoplay
                    circleLoop
                    ImageComponentStyle={{borderRadius: 15, width: '95%', marginTop: 5}}/>
                </View>

                     <View style={styles.containerInner}>
                     <Text style={styles.innerText}>State : ANDRA PRADESH</Text>
                        <Text  style={styles.innerText}>District : GUNTUR</Text>
                        <Text  style={styles.innerText}>City : guntur</Text>

                        <Divider style={{ width: '70%',margin:10,color:Colors.background}} />
                    
                        <Text style={styles.innerText}>Address : UnsurveyedGunturDNo1137,1138 Resurvey DNo1137 BY 1B
                             vacant site Plot No.14,24 extent of 400 sq.yds Nearest Airport/ 
                             Railway/ Bus Stand: guntur</Text>
                             
                             <Text style={styles.innerText}>Property Type: RESIDENTIAL
                             {'\n'}
                             Property Sub Type: PLOT RESIDENTIAL
                            {'\n'}
                            Type of Title Deed: REGISTERED SALE DEED 
                            {'\n'}
                            Status of Possession: SARFAESI PHYSICAL
                            {'\n'}Borrower's Name: M BY S Pavan Cotton Traders
                            {'\n'}Owner's Name: Sri Gude Kotaiah
                            {'\n'}Ownership Type: FREEHOLD</Text>
                             <Text style={styles.innerText}>Summary Description: vaccant land</Text>

                             <Divider style={{ width: '70%',margin:10,color:Colors.background}} />

                            
                        <Text style={styles.innerText}>Bank Name: BANK OF BARODA</Text>
                        <Text style={styles.innerText}>Branch Name: GUNTUR BRANCH </Text>
                        <Text style={styles.innerText}>Reserve Price Rs: 2880000</Text>
                    </View>
                    
                    <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>Auction Open Date :</Text>
                        <Text>10/Feb/2021 02:00:00 PM</Text>
                        </View>
                        <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>Auction Close Date :</Text>
                        <Text>10/Feb/2021 06:00:00 PM</Text>
                    </View>

                    <View style={{padding:40,flexDirection:'row',justifyContent:'space-between',}}>
                    <TouchableOpacity style={styles.bannerButton} onPress={() => {setModalVisible(true);}}>
                    <Text style={styles.bannerButtonText} >CONTACT ME</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.bannerButton1}>
                    <Text style={styles.bannerButtonText1} >BID</Text>
                    </TouchableOpacity> 
                    </View>
                    <Text style={{color:'#AA0000',textAlign:'center',bottom:30}}> Bidding URL becomes active on the day of auction</Text>
               
</View>
                    <Modal
                      isVisible={modalVisible}
                      backdropOpacity={0.3}
                      style={{ margin:10,}}
                      animationIn={'fadeInRight'}
                      animationOut={'fadeInRight'}
                      onBackdropPress={() => setModalVisible(false)}>
                          
                     <View style={styles.centeredView}>
                   <View style={styles.modalView}>
                   
      <View>
         <View style={styles.innerContainer}>
         <TouchableOpacity style={{position:'absolute',right:10,top:10}} onPress={() => {setModalVisible(false);}}>
                        <AntDesign
                         name = "close"
                           size={20}
                           color={'#317773'}
                           
                        /> 
                    </TouchableOpacity>
         <Text style={styles.text1}>Contact Me</Text>
          <TextInput style= {styles.input}
          underlineColorAndroid="transparent"
           placeholder = {"Name\nJohn Smith"}
   placeholderTextColor = {'#317773'}
          /> 
          <TextInput style= {styles.input}
           underlineColorAndroid="transparent"
           placeholder = {"Email Address\njsmith@example.com"}
           placeholderTextColor = {'#317773'}
          /> 
          <TextInput style= {styles.input}
           underlineColorAndroid="transparent"
           placeholder = {"Mobile Number\n1234567898"}
           placeholderTextColor = {'#317773'}
          /> 
 <View style={{padding:45,flexDirection:'row',justifyContent:'space-between',marginHorizontal:6}}>
 <TouchableOpacity style= {styles.button}>
                          <Text style = {styles.buttonText}>Reset</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style= {styles.button1} onPress={() => {setModalVisible(false);}}>
                          <Text style = {styles.buttonText1}>Submit</Text>
                       </TouchableOpacity>
                    </View>
          </View> 
          </View>



                   </View>
                   </View>
         </Modal>


         </ScrollView>
        </View>
    );
};

export default PropDetails;

const styles=StyleSheet.create({
    mainContainer:{
         backgroundColor:Colors.background,
        height:'100%',
       
    },
 propertyText:{
        color:Colors.secondary,
       fontWeight:'700',
       marginVertical:5
      
    },
 container:{
     height:'100%',
     width:'95%',
      margin:15,
     elevation:2,
     borderRadius:10,
  
        },
 containerInner:{
            backgroundColor:Colors.listColor ,
            padding:20,
           width:'95%',
           alignSelf:'center',
            margin:15,
         },
 innerText:{
            color:Colors.secondary,
          
       },

        bannerButton:{
            backgroundColor:'#D3E1DD',
            
            width:'40%',
            height: 30,
            borderRadius: 5,
             elevation: 2,
            justifyContent: 'center',
            alignItems: 'center',
            bottom:20,
            
            
        },
        bannerButtonText:{
            color:Colors.secondary,
            fontWeight:'bold',
        },

        bannerButton1:{
            backgroundColor:Colors.buttonColor,
            width:'40%',
            height: 30,
            borderRadius: 5,
             elevation: 2,
            justifyContent: 'center',
            alignItems: 'center',
            bottom:20,
            
            
        },
        bannerButtonText1:{
            color:'#fff',
            fontWeight:'bold'
            
        },
        text:{
            fontSize:12,
            paddingTop: 30,
            paddingBottom: 2,
            marginBottom:2,
            fontWeight:'normal',
            color:'#317773',
            justifyContent:'flex-start',
            alignItems:'center'
           },
 innerContainer:{
              backgroundColor:'#C8D9D4',
              width: 340,
              height:300,
              top:0,
              bottom:0,
              borderWidth: 2,
              justifyContent:'center',
              alignItems:'center',
              borderRadius: 14,
              borderColor:'#C8D9D4',
          },
 text1:{
            fontSize:23,
            paddingTop: 70,
            paddingBottom: 10,
            marginBottom:0,
            fontWeight:'bold',
            color:'#317773',
            justifyContent:'center',
            alignItems:'center'
           },
 input:{
        padding:6,  
        paddingTop:5,
        maxHeight:95,
        marginVertical:4,
        borderColor:'#317773',
        borderRadius:10,
        borderWidth:0,
        elevation:1,
  
       opacity:.5,
        width:330,
        left:1,
        right:9,
        top:15,
        bottom:20,
            },
 container: {
                paddingTop: 10,
                 alignItems: 'center',
                 justifyContent: 'center',
                },
   button:{
                  backgroundColor:'#D3E1DD',
                  width:'40%',
                  height: 30,
                  borderRadius: 5,
                   elevation: 2,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  bottom:20,
                  right:6
                },
     buttonText:{
                  color:'#317773',
                  fontWeight:'bold'
              },
 button1:{
                backgroundColor:'#1F3B3F',
                width:'40%',
                height: 30,
                borderRadius: 5,
                 elevation: 2,
                justifyContent: 'space-around',
                alignItems: 'center',
                bottom:20,
                left:6
            },
  buttonText1:{
                color:'#fff',
                fontWeight:'bold'
            },
  centeredView1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // position:'absolute',
        bottom:120,
        left:30,
        width:'100%',
    },
      modalView1: {
        backgroundColor:Colors.background,
        borderRadius: 10,
        alignItems: "center",
        paddingBottom:100,
        paddingTop:40,
        paddingLeft:30,
       
      },

});