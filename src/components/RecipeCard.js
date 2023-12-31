import { StyleSheet, Text, View,FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { recipeList } from './Constant'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RecipeCard = () => {
    const navigation = useNavigation()
  return (
    <View>
          <FlatList data={recipeList} renderItem={({ item }) =>
            <TouchableOpacity onPress={()=>navigation.navigate("RecipeDetails",{item:item})} style={{ backgroundColor: 'white', elevation: 100, shadowColor: 'white', shadowOffset: { width: 0.2, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2, marginVertical: 16, borderRadius: 3, alignItems: 'center', paddingHorizontal: 9, paddingVertical: 30, borderRadius: 12 }}>
              <Image style={{ width: 150, height: 150, resizeMode: 'center' }} source={item.image} />
              <Text>{item.name}</Text>
              <View style={{flexDirection:'row',marginTop:8}}>
                  <Text>{item.time}</Text>
                      <Text> | </Text>
                  <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                      <Text style={{marginRight:5}}>{item.rating}</Text>
                      <FontAwesome name="star" size={16} color={"#874fc4"}/>
                  </View>
              </View>
        </TouchableOpacity>} numColumns={2} columnWrapperStyle={{ justifyContent: 'space-between' }} showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
           />
    </View>
  )
}

export default RecipeCard

const styles = StyleSheet.create({})