import { View, Text,Image, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Image source={require('../../assets/image/welcome1.png')} />
      <Text style={{color:'#874fc4',fontSize:20,fontWeight:'bold'}}>Welcome to Worlds Cuisine</Text>
      <Text style={{marginTop: 60,fontSize:30,fontWeight:'bold',color:'#3e1b63'}}>You can be the next Chef</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('RecipeList')} style={{marginTop:40}}>
        <Text style={{backgroundColor:'#511d8a',fontSize:20,fontWeight:'900',color:'white',paddingHorizontal:40,paddingVertical:10,borderRadius:10}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    color:'#0066ff'
  }
})