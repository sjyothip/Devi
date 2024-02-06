import React from 'react'
import { 
    View, 
    Text , 
    Image,
    ScrollView,
    Button
 } from 'react-native'


const HeartCare = () => {
    products = [
        {
            name:'Heart1',
            img:"https://clipart-library.com/images/rcLneqK7i.jpg",
            price:200
        },
        {
            name:'Heart2',
            img:"https://clipart-library.com/images/rcLneqK7i.jpg",
            price:200
        },
        {
            name:'Heart3',
            img:"https://clipart-library.com/images/rcLneqK7i.jpg",
            price:200
        }
    ]
        
  return (
    <View style={{alignItems:'center'}}> 
        <Text style={{fontSize:30}}>Heart Care</Text>
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

export default HeartCare