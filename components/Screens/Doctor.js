
import React from 'react'
import {
    Text,
    View,
    Button
  } from 'react-native';
import PersonalCare from '../PersonalCare';
import HeartCare from '../HeartCare';
import SkinCare from '../SkinCare';
import MultiVitamin from '../MultiVitamin';
  

const Doctor = () => {
  // const name="Anil";
  // const age = 12;
  // console.warn(props.route.params)

  return (
    <View>
      {/* <PersonalCare /> */}
      {/* <HeartCare /> */}
      {/* <SkinCare /> */}
      <MultiVitamin/>
      {/* <Text>List of Doctors</Text> */}
        
    </View>
    )
}

export default Doctor