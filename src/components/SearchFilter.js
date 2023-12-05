import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
const SearchFilter = ({icon,placeHolder}) => {
  return (
      <View style={{
          backgroundColor: '#fff',
          flexDirection: 'row',
          paddingVertical: 16,
          borderRadius: 8,
          paddingVertical: 16,
          marginVertical: 16,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 8,
          elevation: 100,
            alignItems:'center'
      }}>
          <FontAwesome style={{paddingLeft:12}} name={icon} size={20} color={'#874fc4'}/>
          <TextInput style={{ paddingLeft: 9, width: '100%' }} placeholder={placeHolder } placeholderTextColor={"#874fc4"} />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})