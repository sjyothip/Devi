import React from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Button
  } from 'react-native';
import Home from './Homescreen'


const Medicine = (props) => {
  return (
    <View>
        <Text>Medicine List</Text>
        
        <TouchableOpacity>
            <Text>Heart Care</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text>Diabetes Care</Text>
        </TouchableOpacity> 
        <TouchableOpacity >
            <Text>Eye Care</Text>
        </TouchableOpacity> 
        <TouchableOpacity >
            <Text>Lung Care</Text>
        </TouchableOpacity> 
        <TouchableOpacity >
            <Text>Derma Care</Text>
        </TouchableOpacity>
         {/* <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
            <Text>Bones, Joint and Muscle Care</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
            <Text>Respiratory Care</Text>
        </TouchableOpacity>  */}
    </View>
   )
}

export default Medicine