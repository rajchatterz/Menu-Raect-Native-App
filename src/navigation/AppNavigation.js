import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from '../screen/WelcomeScreen'

export default function AppNavigation() {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='Welcome' component={WelcomeScreen}/>
              <Stack.Screen name='RecipeList' component={WelcomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}