import React,{useState} from 'react';
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,TextInput,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../config/colors';
import RadioButtonRN from 'radio-buttons-react-native';
import Modal from 'react-native-modal';
import IconTile from '../components/Icon_Tile';
import { Container, Content, Form, Item, Picker } from 'native-base';
import Header from '../components/PropertyViewHeader';
import colors from '../config/colors';

const Search = ({navigation}) =>
{
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    const Data = [{label: 'Notified',}, {label: 'All',}];
    // const Data1=[   {label: 'All',},];
    
    const [selectedValue, setSelectedValue] = useState();
    const [selectedValue1, setSelectedValue1] = useState();
    const [selectedValue2, setSelectedValue2] = useState();
    const [selectedValue3, setSelectedValue3] = useState();
    const [selectedValue4, setSelectedValue4] = useState();
    return(

<View style={styles.mainContainer}>
            <ScrollView>
                
            <Header text="Search"/>
           <View style={styles.subContainer}>
                        
                        <View style={{ flexDirection: 'row',alignSelf:'center',padding:20,width:'100%',}}>
                        <Text style={{fontSize:16,color:Colors.secondary,paddingTop:10}}>Auction Date  :  </Text>
                        <Text>
                        <RadioButtonRN data={Data} selectedBtn={(e) => console.log(e)} box={false}
                            textStyle={{fontSize:16,color:Colors.secondary}}
                            // boxStyle={{marginLeft:10,marginTop:10,}}
                            circleSize={10} activeColor={Colors.secondary}/>
                         </Text>
                         {/* <Text>
                        <RadioButtonRN data={Data1} selectedBtn={(e) => console.log(e)} box={false} 
                            textStyle={{fontSize:16,color:Colors.secondary}}
                            boxStyle={{marginLeft:10,flexDirection:'row',marginTop:10,}}
                            circleSize={10} activeColor={Colors.secondary}/>
                         </Text> */}
                        
                        </View>

                           
                   
                        <View style={styles.container}>                
      <TextInput
        style={styles.textInputContainer}
        placeholder={"Bidding month\nYYYYMM"}
        placeholderTextColor={'#317773'}
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
          </View>
   <View style={{margin:10}}></View>

          <View style={styles.container}>   
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
    
                style={{ width: undefined ,color:Colors.secondary}}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="All properties" value="All properties" />
                <Picker.Item label="Residentional property" value="Residentional property" />
                <Picker.Item label="Industrial property" value="Industrial property" />
                <Picker.Item label="Commercial property" value="Commercial property" />
                <Picker.Item label="Agricultural property" value="Agricultural property" />
              </Picker>
            </Item>
          </Form>
          </View>

          <View style={{margin:10,}}></View>
   
    <View style={{flexDirection:'row',width:'50%',}}>
    <View style={styles.container}>   
    <Form>
            <Item picker>
              <Picker
                mode="dropdown"
              style={{ width: undefined ,color:Colors.secondary,}}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValue1}
                onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}
              >
                <Picker.Item label="All States" value="All States" />
                <Picker.Item label="Kerala" value="Kerala" />
                <Picker.Item label="Karnataka" value="Karnataka" />
                <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
                <Picker.Item label="Andra Pradesh" value="Andra Pradesh" />
                <Picker.Item label="Goa" value="Goa" />
              </Picker>
            </Item>
          </Form>
          </View>

          <View style={styles.Districts}>   
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                // iosIcon={<Icon name="arrow-down" />}
              
                style={{ width: undefined ,color:Colors.secondary}}
                placeholder="Districts"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValue2}
                onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}
              >
                <Picker.Item label="All Districts" value="All Districts" />
                <Picker.Item label="Kozhikode" value="Kozhikode" />
                <Picker.Item label="Kollam" value="Kollam" />
                <Picker.Item label="Ernaklam" value="Ernaklam" />
                <Picker.Item label="Idukki" value="Idukki" />
                <Picker.Item label="Kannur" value="Kannur" />
              </Picker>
            </Item>
          </Form>
          </View>
   </View>

   <View style={{margin:10}}></View>
   <View style={styles.container}>   
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
               style={{color:Colors.secondary}}
                placeholder="City/Village/Town"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValue3}
                onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
              >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Kozhikode" value="Kozhikode" />
                <Picker.Item label="Kollam" value="Kollam" />
                <Picker.Item label="Ernaklam" value="Ernaklam" />
                <Picker.Item label="Idukki" value="Idukki" />
                <Picker.Item label="Kannur" value="Kannur" />
              </Picker>
            </Item>
          </Form>
          </View>
          <View style={{margin:10}}></View>
          <View style={styles.container}>   
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
              style={{ width: undefined ,color:Colors.secondary}}
                placeholder="Select Bank"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selectedValue4}
                onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
              >
                <Picker.Item label="All bank" value="All bank" />
                <Picker.Item label="Canara bank" value="Canara bank" />
                <Picker.Item label="State bank of india" value="State bank of india" />
                <Picker.Item label="Fedral bank" value="Fedral bank" />
                <Picker.Item label="ICICI bank" value="ICICI bank" />
                <Picker.Item label="Kodak bank" value="Kodak bank" />
              </Picker>
            </Item>
          </Form>
          </View>
     
          <View style={{margin:10}}></View>
    <View style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder={"Property ID\n987654321"}
        placeholderTextColor={'#317773'}
        onChangeText={text => setText(text)}
        defaultValue={text}
      /> 
      </View>   

      <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>

      </View>    

                        </ScrollView>
                        </View>

);
};

export default Search;

const styles=StyleSheet.create({
mainContainer:{
        backgroundColor:colors.background,
        height:'100%',
   },
 

subContainer:{
     paddingHorizontal:10,
     paddingVertical:20,
     backgroundColor:"#b2cdcb",
      borderRadius:15,
      margin:10,
    //   height:'100%'
    },
    container:{
        backgroundColor:'#fff',
        borderRadius:12,
        width:'100%',
        padding:5,
        opacity:0.5,
        elevation:15
  },
  Districts:{
    backgroundColor:'#fff',
    borderRadius:12,
    width:'100%',
    padding:5,
    opacity:0.5,
    marginLeft:3
   
},
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor:colors.background,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        
    },
    headerHeading: {
        fontSize: 20,
        color: '#003366',
        paddingLeft:30,
        color:colors.secondary,
        fontWeight: 'bold',
    },    
    
    //header logo
imLogo:{
    height:40,
    width:40,
    borderRadius: 50,
   
 },
circle: {
      width: 40,
      height: 40,
      borderRadius: 100 / 1,
      alignSelf:'center',
      marginVertical:20
    },
     optionButton: {
      paddingRight: 20,
      paddingLeft: 20,
       paddingVertical: 20,
      
     },
    nameContainer: {
        marginLeft: 20
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 2,
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginHorizontal: 10,
        width: '70%',
        alignItems: 'center'
    },
    textInputContainer:{
        paddingLeft:10
    },
    
    buttonContainer: {
        height: 50,
        backgroundColor:colors.secondary,
        borderRadius: 6,
        marginTop: 40,
        // elevation: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        
        width:'100%'
    },
    buttonText: {
         paddingHorizontal: 20,
         paddingVertical: 15,
         borderRadius: 15,
         color: 'white',
         fontWeight: 'bold',
    },
    
  
});