
import React from 'react';
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


// import GetAPI from './components/GetAPI'
// import GetFAPI from './components/GetAPIFlatlist'
import Login from './components/Screens/Login'
import Home from './components/Screens/Homescreen'
import Doctor from './components/Screens/Doctor';
import Medicine from './components/Screens/Medicine';

const Stack = createNativeStackNavigator();


function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
          screenOptions={{
            title : "User Login",
            headerStyle:{
            backgroundColor:'skyblue',
            },
            headerTintColor:'orange',
            headerTitleStyle:{
              fontSize:25
            } }}
          > 
         <Stack.Screen name = 'Login' component={Login} 
         options={{
          title : "User Login",
          headerTitle:()=><Image source={require('./Img/D.png')} style={styles.image}/>,
          headerStyle:{
           backgroundColor:'skyblue',
          },
          headerTintColor:'orange',
          headerTitleStyle:{
            fontSize:25
          }
         }} />

         <Stack.Screen name = 'Home' component={Home} />
           {/* <Stack.Screen name = 'Doctors' component={Doctor} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    
  )
 };


 const styles = StyleSheet.create({
  image: {
    width: 80, 
    height: 80,
    borderRadius: 5,
  },
 })

export default App;
  