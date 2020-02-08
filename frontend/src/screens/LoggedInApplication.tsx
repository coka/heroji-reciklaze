import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>PROFILE</Text>
  </View>
)

const PickupsScreen = () => (
  <View style={styles.container}>
    <Text>PICKUPS</Text>
  </View>
)

const CommunityScreen = () => (
  <View style={styles.container}>
    <Text>COMMUNITY</Text>
  </View>
)

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>ABOUT</Text>
  </View>
)

const LoggedInApplication = () => (
  <Tab.Navigator>
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Pickups" component={PickupsScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
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
