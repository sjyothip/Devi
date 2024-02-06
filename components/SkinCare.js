import React from 'react'
import { 
    View, 
    Text , 
    Image,
    ScrollView,
    Button
 } from 'react-native'


const SkinCare = () => {
    products = [
        {
            name:'Skin',
            img:"https://www.empire.edu/blog/wp-content/uploads/2014/06/Glowing-Healthy-Skin-Moisturize-Face.jpg",
            price:200
        },
        {
            name:'Skin1',
            img:"https://www.empire.edu/blog/wp-content/uploads/2014/06/Glowing-Healthy-Skin-Moisturize-Face.jpg",
            price:200
        },
        {
            name:'Skin2',
            img:"https://www.empire.edu/blog/wp-content/uploads/2014/06/Glowing-Healthy-Skin-Moisturize-Face.jpg",
            price:200
        }
    ]
        
  return (
    <View> 
        <Text style={{fontSize:30}}>Skin Care</Text>
        <ScrollView>
        {
            products.map((item)=><View>
                <Text style={{fontSize:24}}>{item.name}</Text>
                <Image style={{width:60,height:60}} source={{uri:item.img}} />
                <Text style={{fontSize:24}}>{item.price}</Text>
                <Button title="Add to Cart"  />
            </View> )
        }
        </ScrollView>
    </View>  )
}

export default SkinCare