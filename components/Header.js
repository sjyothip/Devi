import React, { useState , useEffect } from 'react'
import { View , 
    Text , 
    ScrollView , 
    StyleSheet ,
    Image,
    
} from 'react-native';
import { useSelector } from 'react-redux'


const Header = () => {
    const cartData = useSelector((state)=>state.reducer);
    const [cartItems, setCartItems] = useState(0);
    useEffect(()=>{
        console.log("cartItems",cartItems)
        setCartItems(cartData.length)
    },[cartData])


  return (
    <View>
        <Text style={{fontSize:30, alignItems:'right', padding:10, backgroundColor:'orange'}}> 
            <View style={{backgroundColor:'Yellow',borderRadius:10, height:20,Width:20}}>
                <Text style={{fontSize:15}}> {cartItems} </Text>
            </View> 
        </Text>
        {/* <Image source={require('./Img/profile.jpg')} style={{width: 40, height: 40 , borderRadius: 5}} /> */}

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Header