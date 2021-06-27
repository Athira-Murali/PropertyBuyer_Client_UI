import React, {useState} from 'react';
import colors from '../config/colors';
import {StyleSheet, View, Text,TouchableOpacity,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import IconTile from '../components/Icon_Tile';
import EvilIons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function PropertyViewHeader({text}){

    const navigation = useNavigation();

    const pressHandlerAbout = ()=> {
        navigation.navigate('About')
        
      }


      const pressHandlerAdminHome = ()=> {
        // navigation.navigate('AdminHome')
        
      }
      
      const pressHandlerSuggestiont = ()=> {
        navigation.navigate('Suggestion')
        
      }

      const [modalOpen,setModalOpen]=useState(false);
    



    return(
        <View style={styles.RowView}>

             {/* Menu Modal */}
            
             <Modal
                    isVisible={modalOpen}
                    backdropOpacity={0.3}
                    style={{ margin:10,}}
                    animationIn={'slideInRight'}
                    animationInTiming={800}
                    animationOut={'slideOutRight'}
                    animationOutTiming={800}
                    onBackdropPress={() => setModalOpen(false)}>

                    <ScrollView style={styles.scroll}>
                    <View style={styles.centeredView1}>
                    <View style={styles.modalView1}>
            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',bottom:30}}>
                    <TouchableOpacity  style={{right:100}} >
                    <AntDesign onPress={() => setModalOpen(false)} style={styles.optionButton} name="menuunfold" size={25} color={colors.secondary}/>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{left:70}} onPress={() => setModalOpen(false)} >
                  <AntDesign name="right" size={20} color={colors.secondary}/></TouchableOpacity>
            </View>
                <View style={{flexDirection:'row',bottom:20,}}>
                    
                    <TouchableOpacity>
                    <IconTile data={require('../assets/icons/icon5.jpg')} title="Guidelines"  onPress={() => navigation.navigate('Guidelines')}/>
                 
                  
                    </TouchableOpacity>
                   
                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon2.jpg')} title="Disclaimer" onPress={() => navigation.navigate('Disclaimer')} />
                     
                    </TouchableOpacity>

                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon9.jpg')} title="Residential property" onPress={() => navigation.navigate('Residential')}
                      />
                    </TouchableOpacity>
                    
                </View>
                <View style={{flexDirection:'row',bottom:20,}}>
                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon16.jpg')} title="Commercial property"  onPress={() => navigation.navigate('Commercial')}  />
                  </TouchableOpacity>
                   
                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon6.jpg')} title="Industrial property" onPress={() => navigation.navigate('Industrial')}/>
                       
                    </TouchableOpacity>
                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon14.jpg')} title="Agricultural property"  onPress={() => navigation.navigate('Agricultural2')}/>

                    </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:20,}}>

                    <TouchableOpacity >

                    <IconTile data={require('../assets/icons/icon8.jpg')} title="property over state" onPress={() => navigation.navigate('ViewState')} />
                   </TouchableOpacity>

                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon15.jpg')} title="Participating Banks" onPress={() => navigation.navigate('Bank')}/>
                    </TouchableOpacity>
                   
                   <TouchableOpacity >
                   <IconTile data={require('../assets/icons/icon3.jpg')} title="FAQ" onPress={() => navigation.navigate('FAQ')}/>
                   </TouchableOpacity>
                   
                </View>
                <View style={{flexDirection:'row',bottom:20,}}>

                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon11.jpg')} title="Suggestions" onPress={() => navigation.navigate('Suggestions')} />
                   </TouchableOpacity>
                    

                    <TouchableOpacity >
                    <IconTile data={require('../assets/icons/icon1.jpg')} title="Contact Us"  onPress={() => navigation.navigate('Contactus')}/>
                    </TouchableOpacity>
                   
                    <TouchableOpacity >
                   <IconTile data={require('../assets/icons/icon13.jpg')} title="About"  onPress={() => navigation.navigate('About')}/>
                    </TouchableOpacity>

                </View>
                </View>
                </View>
                    </ScrollView>

                    
            </Modal>


         <View style={styles.header1}>
            
                <AntDesign onPress={()=> navigation.goBack(null)} style={styles.iconItem}  name="left" size ={25}></AntDesign >
                <View style={styles.header}><Text style={styles.title}>{text} </Text></View>
                <AntDesign onPress={()=> setModalOpen(true)} style={styles.iconItem}  name="menu-fold" size ={25}></AntDesign >
           
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
//header
header1: {
     backgroundColor:colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height:45,
    marginTop:35,
    
    
  },
header:{
    width:'80%',
    height:40,
    flexDirection:'row',
    paddingTop:10,
    backgroundColor:colors.background,
    justifyContent:'center'
    
},
title:{
    fontSize:18,
    fontWeight:'bold',
    letterSpacing:1,
    color:colors.secondary
   
},
iconItem:{
    color:colors.secondary,
    marginRight:10
},

centeredView1: {
    flex: 1,
    alignItems: "flex-end",
    position:'relative',
    justifyContent:'space-between',
    
 },
  modalView1: {
    backgroundColor:'#97BAB8',
    borderRadius: 10,
    alignItems: "center",
    paddingBottom:'15%',
    padding:20
    
   
  },

  
      optionButton: {
        paddingRight: 25,
        paddingLeft: 22,
         paddingVertical: 25,
      
     },
     scroll:{
        marginTop:-6,
        marginRight:-6
    },
    styletext:{
        color: colors.secondary,
         padding:10,
        lineHeight:18,
        textAlign:'justify'
        
    },
    styletext1:{
        color: colors.secondary,
        lineHeight:18,
        padding:10
       
        
    },
    stylelink:{
        color: '#1e90ff',
        padding:20,
        lineHeight:18,
    },


     
    
    
});