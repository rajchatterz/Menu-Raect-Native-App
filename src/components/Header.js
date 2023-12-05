import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
const Header = ({headerText,headerIcon}) => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:22,fontWeight:'900',color:'#874fc4'}}>{headerText}</Text>
          <FontAwesome name={headerIcon} size={23} color="#874fc4" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})