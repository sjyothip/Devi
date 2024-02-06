
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
import Header from './components/Header'
// import Doctor from './components/Screens/Doctor';
// import Medicine from './components/Screens/Medicine';
// import Profile from './components/Profile';


const Stack = createNativeStackNavigator();


function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            title : "User",
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
          // headerTitle:()=><Image source={require('./Img/D.png')} style={styles.image}/>,
          headerStyle:{
           backgroundColor:'skyblue',
          },
          headerTintColor:'orange',
          headerTitleStyle:{
            fontSize:25
          }
         }} />

         <Stack.Screen name = 'Home' component={Home}
          options={{
            title : "User Login",
            headerTitle:()=><Image source={require('./Img/D.png')} style={styles.image}/>,
            headerRight:()=> <Header />,
            // <Button title='Profile' onPress={()=>{Profile}} /> ,

            // headerRight:()=><Image source={require('./Img/profile.jpg')} style={{width: 40, height: 40 , borderRadius: 5}} />,
            headerStyle:{
             backgroundColor:'skyblue',
            },
            // headerTintColor:'orange',
            headerTitleStyle:{
              fontSize:25
            }
          }} 
          />
           {/* <Stack.Screen name = 'Doctors' component={Doctor} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    
  )
 };


 const styles = StyleSheet.create({
  image: {
    width: 60, 
    height: 60,
    borderRadius: 5,
  },
 })

export default App;
  