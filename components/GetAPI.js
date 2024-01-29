import React ,{useEffect, useState} from 'react';
import {
    ScrollView,
    Text,
    View,
  } from 'react-native';
import {Medicine} from './component/Medicine'
  
const GetAPI = () => {
    const [data,setData] = useState(undefined);

    const getAPIData = async() =>{
      // const url = "https://jsonplaceholder.typicode.com/posts/1";
      const url = "https://jsonplaceholder.typicode.com/posts";
      let result = await fetch(url);
      result = await result.json();
      setData(result);
      
    }
    useEffect(()=>{
      getAPIData();
    },[])
  
    return (<View>
        <ScrollView>
            <Text style={{fontSize:40}}>API Call</Text>
            {data ?
                data.map((item)=> <View style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:2}}>
                <Text style={{fontSize:20, backgroundColor:'#ddd'}}> ID : {item.id} </Text>
                <Text style={{fontSize:20}}> UserID : {item.userId} </Text>
                <Text style={{fontSize:20}}> TITLE : {item.title} </Text>
                <Text style={{fontSize:20}}> BODY : {item.body} </Text>    
                
                </View>
                )
                : null
            }
        </ScrollView>
      </View>
  
    )
}

export default GetAPI