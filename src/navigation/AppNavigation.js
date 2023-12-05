import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../screen/WelcomeScreen'
import RecipeList from '../screen/RecipeList'
import RecipeDetailsScreen from '../screen/RecipeDetailsScreen'

export default function AppNavigation() {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown:false,animation:'fade_from_bottom'}}>
              <Stack.Screen name='Welcome' component={WelcomeScreen}/>
              <Stack.Screen name='RecipeList' component={RecipeList}/>
              <Stack.Screen options={{headerShown:true,headerTransparent:true,headerStyle:{backgroundColor:'transparent'},headerTitle:'',headerTintColor:'white'}}  name='RecipeDetails' component={RecipeDetailsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}