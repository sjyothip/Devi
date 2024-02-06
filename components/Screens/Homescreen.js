
import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Doctor from './Doctor';
import Medicine from './Medicine';



const Tab = createMaterialTopTabNavigator();

const Home =()=>{

    return(

    <Tab.Navigator>
          <Tab.Screen name='Doctor' component={Doctor} />
          <Tab.Screen name='Medicine' component={Medicine} />
    </Tab.Navigator>





      // <Stack.Navigator 
      //     screenOptions={{
      //       title : "User Login",
      //       headerStyle:{
      //       backgroundColor:'skyblue',
      //       },
      //       headerTintColor:'orange',
      //       headerTitleStyle:{
      //         fontSize:25
      //       } }}
      //     > 
      //    <Stack.Screen name = 'Doctors' component={Doctors} 
      //    options={{
      //     title : "Doctors",
      //     headerRight:()=><Button title='Profile' />,
      //     headerTitle:()=><Image source={require('./Img/D.png')} style={styles.image}/>,
      //     headerStyle:{
      //      backgroundColor:'skyblue',
      //     },
      //     headerTintColor:'orange',
      //     headerTitleStyle:{
      //       fontSize:25
      //     }
      //    }} />
      // </Stack.Navigator>

          // <View style={{flex:1, justifyContent:'center'}}>
          //   <Text style={{fontSize:40}}>Home Screen</Text>
          //   <Button
          //     title="Go to Doctors" 
          //     onPress={()=>props.navigation.navigate('Doctor')}
          //   />


// {/*             
//             // {/* <TouchableOpacity onPress={()=>navigation.navigation.navigate("HeartCare")}
//             // style={styles.button}>
//             //     <Text style={styles.buttonText}>Heart Care</Text>
//             // </TouchableOpacity> 
//             // <TouchableOpacity onPress={()=>{navigate("Doctor")}} style={styles.button}>
//             //     <Text style={styles.buttonText}>Bones, Joint and Muscle Care</Text>
//             // </TouchableOpacity> 
//             // <TouchableOpacity onPress={()=>{navigation.navigate("Medicine")}} style={styles.button}>
//             //     <Text style={styles.buttonText}>Respiratory Care</Text>
//             // </TouchableOpacity>  */}
          //  </View> 
    )
  }

  {/* // const HeartCare = ()=>{
  //   <View><Text>Heart Diseases</Text></View>
  // } */}

  const styles= StyleSheet.create({
    banner:{
      height:300,
      width:300
    },
    bannerContainer:{
      justifyContent:'center',
      alignItems:'center',
      flex:1
    },
    container:{
      paddingTop:40,
      paddingHorizontal:20,
      height:'100%'
    },
    button:{
      width:'100%',
      backgroundColor:'green',
      padding:16,
      borderRadius:16,
      alignItems:'center',
      marginBottom:30
    },
    buttonText:{
      fontSize:24,
      fontWeight:'600',
      color:'white',
    }
  })

export default Home