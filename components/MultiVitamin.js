import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text ,
    ScrollView,
 } from 'react-native'
import Cart from './Cart';


const MultiVitamin = () => {
    products = [
        {
            id:1,
            name:'Vitamin D',
            img:"https://i5.walmartimages.com/asr/0a83a67a-feda-4a6b-b7bd-91b46a47468a.d6bdf139a835c742804c30b721d323ca.jpeg",
            price:200
        },
        {
            id:2,
            name:'Vitamin A',
            img:"https://i5.walmartimages.com/asr/0a83a67a-feda-4a6b-b7bd-91b46a47468a.d6bdf139a835c742804c30b721d323ca.jpeg",
            price:400
        },
        {
            id:3,
            name:'Vitamin E',
            img:"https://i5.walmartimages.com/asr/0a83a67a-feda-4a6b-b7bd-91b46a47468a.d6bdf139a835c742804c30b721d323ca.jpeg",
            price:150
        },
        {
            id:4,
            name:'Vitamin B12',
            img:"https://i5.walmartimages.com/asr/0a83a67a-feda-4a6b-b7bd-91b46a47468a.d6bdf139a835c742804c30b721d323ca.jpeg",
            price:230
        },

    ]

    
  return (
    <View> 
        <Text>Multi Vitamin Tablets</Text>
        <ScrollView style={{marginBottom:50}}>
        <View>
        {
            products.map((item)=> <Cart item={item} />)
        }
        </View>
        </ScrollView>
    </View>
  )
}


export default MultiVitamin