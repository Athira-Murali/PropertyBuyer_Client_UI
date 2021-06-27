import React, {useState} from 'react';
import {View,Text,FlatList,StatusBar,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../config/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

import UserData from './data';
import BoxContainer from '../../components/Box_Container';
import IconTile from '../../components/Icon_Tile';
import Header from '../../components/PropertyViewHeader';
 const Commercial = ({navigation}) => {
    const USERS = new UserData();
    const Frequent_Users = USERS.FrequentUsers;
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <BoxContainer
            data={item.image}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            onPress={() => navigation.navigate('PropDetails')}
         />
    );

    return(

        // <Modal
        // isVisible={true}
        // style={{margin:0}}
        // backdropOpacity={0.0}>
     
        
            <View style={{flex:1,backgroundColor:Colors.background}}>
                <StatusBar style={{backgroundColor:Colors.background}} translucent={true} />
                
                  {/* View for header starts here */}
                  <Header text="Commercial"/>
                    {/* View for header ends here */}

                    {/* Content session starts here */}
                    <View style={styles.content}>                  
                        <View style={styles.innercontent}>
                            

                                <FlatList
                                    data={Frequent_Users}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={renderItem}
                                    showsVerticalScrollIndicator={false}
                                    horizontal={false}
                                    numColumns={2}
                                />
                           
                          
                        </View>
                    </View>
                    {/* Content session ends here*/}
            </View>
                
   
// </Modal>
    );
 };

 const styles = StyleSheet.create({
 
optionButton:{
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 20,
 },

    innercontent:{
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      borderRadius:20,
      backgroundColor:"#b2cdcb",
      marginTop:20
    },

  textstyle: {
    fontWeight:"bold",
    fontSize:20,
    paddingLeft:'8%',
    start:"15%",
    justifyContent:'center',
    alignItems:'center',
    color:Colors.buttonColor
   },
   iconstyle: {
    color:Colors.buttonColor,
    paddingLeft:40
   }
      
   });

 export default Commercial;