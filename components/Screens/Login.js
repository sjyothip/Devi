import React , { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Tab = createMaterialTopTabNavigator();
const Login =(props)=>{
    // console.log(props)
    return(
      <View>
        <Text style={{fontSize:40}}> This is LOGIN Screen</Text>
        <Button title='Go to Home Page' onPress={()=>props.navigation.navigate('Home')} />
      </View>

    

    )
  }

  

  // const SignUp=()=>{
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <Text style={{fontSize:40}} > SignUp </Text>
  //     </View>
  //   )
  // }
  
  // const Others=()=>{
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <Text style={{fontSize:40}} > Others </Text>
  //     </View>
  //   )
  // }

  export default Login