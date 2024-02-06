import React from 'react'
import { View, Text , Image, ScrollView, Button } from 'react-native'


const HairCare = () => {
    products = 
        [
            {
                name:'Hair1',
                img:"https://www.awaysomearticle.com/wp-content/uploads/2020/02/Best-Hair-Care-Tips.jpg",
                price:240
            },
            {
                name:'Hair2',
                img:"https://www.awaysomearticle.com/wp-content/uploads/2020/02/Best-Hair-Care-Tips.jpg",
                price:320
            },
            {
                name:'Hair3',
                img:"https://www.awaysomearticle.com/wp-content/uploads/2020/02/Best-Hair-Care-Tips.jpg",
                price:260
            },
            {
                name:'Hair4',
                img:"https://www.awaysomearticle.com/wp-content/uploads/2020/02/Best-Hair-Care-Tips.jpg",
                price:200
            },
            {
                name:'Hair5',
                img:"https://www.awaysomearticle.com/wp-content/uploads/2020/02/Best-Hair-Care-Tips.jpg",
                price:150
            }
    ]
    
  return (
    <View style={{alignItems:'center'}}>
        <Text>Hair Care</Text>
        <ScrollView>
        {
            products.map((item)=><View>
                <Text style={{fontSize:24}}>{item.name}</Text>
                <Image style={{width:60,height:60}} source={{uri:item.img}} />
                <Text style={{fontSize:24}}>{item.price}</Text>
                {/* <Button title="Add to Cart"  /> */}
            </View> )
        }
        </ScrollView>
    </View>
  )
}

export default HairCare