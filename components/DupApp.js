
// import React from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
// } from 'react-native';

// // import Login from './components/Login'
// // import Home from './components/Homescreen'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const Stack = createNativeStackNavigator();
// const rep = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();


// // function Letter() {
// //   return (
// //     <Tab.Navigator>
// //       <Tab.Screen name="Feed" component={Feed} />
// //       <Tab.Screen name="Messages" component={Messages} />
// //     </Tab.Navigator>
// //   );
// // }

// const Feed=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:40}} > Feed </Text>
//     </View>
//   )
// }
// const Messages=()=>{
//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:40}} > Messages </Text>
//     </View>
//   )
// }

// const App = () => {

//   return ( 
//     <NavigationContainer>
//         <Stack.Navigator
//               screenOptions={{
//               headerStyle:{
//                 backgroundColor:'blue',
//               },
//               headerTintColor:'orange',
//               headerTitleStyle:{
//                 fontSize:25
//               }
//             }}
//           >
//           <Stack.Screen name = 'HomeScreen' component={Home} 
//             //   options={{
//             //     headerTitle:()=><Button title='Login' onPress={Login} />,
//             //     // headerRight:()=><Header/>,
//             //     title:"User Login",
//             //     headerStyle:{
//             //       backgroundColor:'sky blue',
//             //     },
//             //     headerTintColor:'red',
//             //     headerTitleStyle:{
//             //     fontSize:40
//             //   }
//             // }}
//           />
//            {/* <Stack.Screen name = 'HomeScreen' component={Home} 
//         options={{
//           headerTitle:()=><Text>HOMEPAGE</Text>,
//           headerRight:()=><Button title='Login' onPress={()=>{Login}} />,
//           title:"HomeScreen",
//           headerStyle:{
//             backgroundColor:'sky blue',
//           },
//           headerTintColor:'red',
//           headerTitleStyle:{
//           fontSize:40
//           }
//         }}
//       /> */}
//           <Stack.Screen name='Feed' component={Feed} />
//           <Stack.Screen name='Messages' component={Messages} />
//         </Stack.Navigator> 
//         {/* <Tab.Navigator> */}
//           {/* <Tab.Screen name='Letter' component={Letter} /> */}
//           {/* <Tab.Screen name='Homescreen' component={Home} /> */}
//           {/* <Tab.Screen name='Others' component={Others} /> */}

//         {/* </Tab.Navigator> */}
        
//     </NavigationContainer>
//   )
// };

// const Header=()=>{
//   return(<TextInput placeholder='name' />)
// }





// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   }
// });


// export default App;
