import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React from 'react'
import { recipeList } from './Constant'
const RecipeCard = () => {
  return (
    <View>
          <FlatList data={recipeList} renderItem={({ item }) => <View style={{ backgroundColor: 'white', elevation: 100, shadowColor: 'white', shadowOpacity: 0.2, shadowRadius: 2, marginVertical: 16, borderRadius: 3, alignItems: 'center' }}>
              <Image style={{width:150,height:150,resizeMode:'center'}} source={item.image}/>
              <Text>{ item.name}</Text>
      </View>}/>
    </View>
  )
}

export default RecipeCard

const styles = StyleSheet.create({})