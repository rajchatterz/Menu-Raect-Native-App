import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RecipeDetailsScreen = () => {
    const route = useRoute()
    const { item } = route.params
  return (
    <View style={{backgroundColor:item.color,flex:1}}>
          <View style={{ backgroundColor: 'white', flex: 1, marginTop: 140, borderTopLeftRadius: 56, borderTopRightRadius: 56, alignItems:'center'}}>
              <View style={{
                //   backgroundColor: '#dad1e4', 
                  width: 300,
                  height: 300,
                  top:-150
                  
              }}>
                  <Image source={item.image} style={{width:'100%',marginTop:-50,objectFit:'contain'}} />
              </View>
              <View>
                  <Text style={{textAlign:'center' ,marginTop: -90, fontSize: 23, fontWeight: 'bold' }}>{item.name}</Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:-30,paddingHorizontal:10,elevation:100,shadowColor:'black'}}>
              <View style={{marginTop:40}}>
              <Text style={{
                  marginTop:-40, fontSize: 20,
              }}>{item.description}</Text>
              </View>
              {/* Recipe extra details */}
              <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                  <View style={{ backgroundColor: "rgba(135,206,235,0.8)", paddingHorizontal:16,paddingVertical:26,borderRadius:9,alignItems:'center',marginTop:10 }}>
                      <Text style={{fontSize:36}}>⏰</Text>
                      <Text style={{fontSize:20,fontWeight:'500'}}>{ item.time}</Text>
                  </View>
                  <View style={{ backgroundColor: "rgba(255,165,0,0.48)", paddingHorizontal:26,paddingVertical:26,borderRadius:9,alignItems:'center',marginTop:10 }}>
                      <Text style={{fontSize:36}}>🍳</Text>
                      <Text style={{fontSize:20,fontWeight:'500'}}>{ item.difficulty}</Text>
                  </View>
                  <View style={{ backgroundColor: "rgba(255,0,0,0.38)", paddingHorizontal:16,paddingVertical:26,borderRadius:9,alignItems:'center',marginTop:10 }}>
                      <Text style={{fontSize:36}}>🔥</Text>
                      <Text style={{fontSize:20,fontWeight:'500'}}>{ item.calories}</Text>
                  </View>
                  
                  
              </View>
              <View style={{alignSelf:'flex-start',marginVertical:22}}>
                  <Text style={{ fontSize: 22, fontWeight: "600" }}>Ingredients:</Text>
                  {item.ingredients.map((item,index) => {
                      return (
                          <View key={`item-${index}`} style={{flexDirection:"row", alignItems:'center',gap:6}}>
                              <View style={{backgroundColor:"red",height:10,width:10,borderRadius:5}}></View>
                              <Text style={{ fontSize: 18, fontWeight: "500" }} >{item}</Text>
                          
                          </View>
                    )
                })}  
              </View>

              {/* reciper steps */}
              <View style={{alignSelf:'flex-start',marginVertical:22}}>
                  <Text style={{ fontSize: 22, fontWeight: "600" }}>Steps</Text>
                  {item.steps.map((item,index) => {
                      return (
                          <View key={`item-${index}`} style={{flexDirection:"row", alignItems:'center',gap:6}}>
                              <View style={{backgroundColor:"red",height:10,width:10,borderRadius:5}}></View>
                              <Text style={{ fontSize: 18, fontWeight: "500" }} >{item}</Text>
                          
                          </View>
                    )
                })}  
              </View>
              </ScrollView>
      </View>
    </View>
  )
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({})