import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { categories } from './Constant'
const Categories = () => {
  return (
      <View>
          <Text style={{fontSize:25,fontWeight:'900',paddingBottom:9,color:'#874fc4'}}>Categories</Text>
          <ScrollView showsHorizontalScrollIndicator={ false} horizontal>
              {categories.map((item)=>(
                  <View style={{marginRight:39}} key={item.id}>
                    <Text style={{backgroundColor:'#874fc4',borderRadius:8,paddingHorizontal:16,paddingVertical:9,color:'white',fontSize:18,fontWeight:'900'}}>{item.category}</Text>
                </View>
              ))}
        </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})