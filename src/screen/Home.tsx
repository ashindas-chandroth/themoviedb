import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TvScreen from './TvScreen';
import MovieScreen from './MovieScreen';
import { colors } from '../constants';

const Tab = createMaterialTopTabNavigator();
const Home = () => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: colors.primaryColor,
      },
    }}>
      <Tab.Screen name='Movies' component={MovieScreen} />
      <Tab.Screen name='TV' component={TvScreen} />

    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})