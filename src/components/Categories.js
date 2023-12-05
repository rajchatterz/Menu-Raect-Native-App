import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { categories } from './Constant'
const Categories = () => {
  return (
      <View>
          <Text style={{fontSize:25,fontWeight:'900',paddingBottom:9,color:'#874fc4'}}>Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={ false} horizontal>
              {categories.map((item,index)=>(
                  <View style={{marginRight:20,elevation:100}} key={item.id}>
                    <Text style={{backgroundColor:index===0?'#874fc4':'white',borderRadius:8,paddingHorizontal:16,paddingVertical:9,color:index===0?'white':'black',fontSize:18,fontWeight:'500'}}>{item.category}</Text>
                </View>
              ))}
        </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})