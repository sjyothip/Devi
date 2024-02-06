import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text ,
    Image,
    Button,
    StyleSheet
 } from 'react-native'
 import { useDispatch , useSelector } from 'react-redux'
 import { addToCart , removeFromCart } from './redux/action';


const Cart = (props) => {
    const item = props.item    
    
    const dispatch = useDispatch();
    const cartItemss = useSelector((state)=>state.reducer);
    const [isAdded, setIsAdded] = useState('')

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }
    const handleRemoveToCart=(item)=>{
        dispatch(removeFromCart(item.name))
    }
    useEffect(()=>{
        let result = cartItemss.filter((element)=>{
            return element.name === item.name
        })
        if(result.length){
            setIsAdded(true)
        }
        else{
            setIsAdded(false)
        }
    }, [cartItemss])
    

  return (
    <View>
        <View key={item.key} style={styles.viewGrid}>
                <Text style={styles.item}>{item.name}</Text>
                <Image style={{width:60,height:60, alignSelf:'center'}} source={{uri:item.img}} />
                <Text style={styles.item}>{item.price}</Text>
                {
                    isAdded ?                     
                    <Button title="Remove" style={styles.button} onPress={()=>handleRemoveToCart(item)} />  
                    :
                    <Button title="Add to Cart" style={styles.button} onPress={()=>handleAddToCart(item)} />
                }
            </View>
    </View>
  )
}



const styles = StyleSheet.create({
    button:{
        // backgroundColor:'#bbb',
        color:"steel blue",
        fontSize:20,
        fontWeight:500,
        margin:5,
        padding : 10,
        elevation:10,
        borderRadius:10,
        borderColor:'Light Pink',
        alignSelf:'center',
        shadowOpacity:1
    },
    item : {
        fontSize:15,
        textAlign:'center',
    },
    viewGrid:{
        flex:1,
        flexDirection:'center',
        flexWrap:'wrap',
        fontSize:25,
        color:"white",
        backgroundColor:'orange',
        width:150,
        height:150,
        margin:5,
        padding:5,
        borderRadius:20,
        textAlignVertical:'center',
        textAlign:'center',

    }
})

export default Cart