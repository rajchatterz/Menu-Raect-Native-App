import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchFilter from '../components/SearchFilter'
import Categories from '../components/Categories'
export default function RecipeList() {
  return (
      
        <SafeAreaView style={{flex:1,marginHorizontal:16}}>
          <Header headerText={"Raj Chatterjee"} headerIcon={"bell-o"} />
          <SearchFilter icon="search" placeHolder={"Type Chicken Makhani"} />
          
          {/* Category Filetr */}

   
            <Categories/>
         
        </SafeAreaView>
      
  )
}