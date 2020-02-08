import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import About from './About'
import Pickups from './Pickups'

const Tab = createBottomTabNavigator()

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>PROFILE</Text>
  </View>
)

const LoggedInApplication = () => (
  <Tab.Navigator>
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Pickups" component={Pickups} />
    <Tab.Screen name="Community" component={Pickups} />
    <Tab.Screen name="About" component={About} />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})

export default LoggedInApplication
