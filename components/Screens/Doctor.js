
import React from 'react'
import {
    Text,
    View,
    Button
  } from 'react-native';
import GetAPI from '../GetAPI';
  

const Doctor = ({navigation}) => {
  // const name="Anil";
  // const age = 12;
  // console.warn(props.route.params)

  return (
    <View>
      <GetAPI />
      {/* <Text>List of Doctors</Text> */}
    {/* <Button title="GET API" onPress={()=>{navigation.navigate("GetAPI")}} /> */}
    {/* <Text>New</Text> */}
        
    </View>
    )
}

export default Doctor