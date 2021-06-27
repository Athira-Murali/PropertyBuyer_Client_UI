import React,{useState} from 'react';
import {View,TouchableOpacity,StyleSheet,Text, ScrollView,Image} from 'react-native';
import BoxContainer from '../components/Box_Container';
import Colors from '../config/colors';
import Modal from 'react-native-modal';
import Header from '../components/PropertyViewHeader';
const Favourites =({navigation})=>{
    const [modalVisible, setModalVisible] = useState(false);
    return(
   

        <View style={styles.mainContainer}>
          
              {/* header */}
              <Header text="Favourites"/>

           

                        <View style={styles.container}>
                        <ScrollView>
                            <View style={{flexDirection:'row',justifyContent:'center',paddingTop:25}}>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <BoxContainer data={require('../assets/images/banner2.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            <BoxContainer data={require('../assets/images/banner1.jpg')} 
                            title=" 3 star hotel" subtitle="Banglore,India"></BoxContainer>
                            </View>
                            </ScrollView>
                        </View>
                       
            </View>
   
    );
};

export default Favourites;

const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:Colors.background,
        height:'100%',
        
    },
container:{
    height:'100%',
    flexDirection:'column',
    backgroundColor:"#b2cdcb",
    margin:5,
   marginTop:25,
    borderRadius:20

    }

});