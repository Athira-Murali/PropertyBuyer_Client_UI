import React, {useState} from 'react';
import {View,Text,FlatList,StatusBar,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import Colors from '../../config/colors';
import UserData from './data';
import BoxContainer from '../../components/Box_Container';


import { colors } from 'react-native-elements';
import Header from '../../components/PropertyViewHeader';
 const Agricultural = ({navigation}) => {
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
      
        
            <View style={{flex:1,backgroundColor:Colors.background}}>
                <StatusBar style={{backgroundColor:Colors.background}} translucent={true} />
                
                    {/* View for header starts here */}
                    <Header text="Agricultural properties"/>
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
 
    );
 };
 const styles = StyleSheet.create({
  
   content: {
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    height:"84%",
    paddingTop:0,
    
    
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
    color:Colors.buttonColor
   },
   iconstyle: {
    color:Colors.buttonColor,
    paddingLeft:50
   }
      
   });
 export default Agricultural;