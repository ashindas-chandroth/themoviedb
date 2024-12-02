import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/screen/Home'
import { Provider } from 'react-redux'
import store from './src/redux/store/store'
import LoginScreen from './src/screen/LoginScreen'
import MovieDetails from './src/screen/MovieDetails'
import SignUpScreen from './src/screen/SignUpScreen'
import SplashScreen from 'react-native-splash-screen'

const Stack = createNativeStackNavigator()
const App = () => {
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide();
    },500)
  })
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='MovieDetails' component={MovieDetails}/>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App