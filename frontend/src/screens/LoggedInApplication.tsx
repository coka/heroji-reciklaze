import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import About from './About'
import Community from './Community'
import Pickups from './Pickups'

const Tab = createBottomTabNavigator()

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>PROFILE</Text>
  </View>
)

const LoggedInApplication = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: '#8dc63f',
      inactiveBackgroundColor: '#8dc63f',
    }}
  >
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: ({ focused }) => {
          const opacity = focused ? 1 : 0.6
          return (
            <View style={[styles.tabLabel, { opacity }]}>
              <Image
                style={styles.tabLabelIcon}
                resizeMode="contain"
                source={require('../../assets/user.png')}
              />
              <Text style={styles.tabLabelText}>PROFIL</Text>
            </View>
          )
        },
      }}
    />
    <Tab.Screen
      name="Pickups"
      component={Pickups}
      options={{
        tabBarLabel: ({ focused }) => {
          const opacity = focused ? 1 : 0.6
          return (
            <View style={[styles.tabLabel, { opacity }]}>
              <Image
                style={styles.tabLabelIcon}
                resizeMode="contain"
                source={require('../../assets/pickup.png')}
              />
              <Text style={styles.tabLabelText}>PREUZIMANJA</Text>
            </View>
          )
        },
      }}
    />
    <Tab.Screen
      name="Community"
      component={Community}
      options={{
        tabBarLabel: ({ focused }) => {
          const opacity = focused ? 1 : 0.6
          return (
            <View style={[styles.tabLabel, { opacity }]}>
              <Image
                style={styles.tabLabelIcon}
                resizeMode="contain"
                source={require('../../assets/community.png')}
              />
              <Text style={styles.tabLabelText}>ZAJEDNICA</Text>
            </View>
          )
        },
      }}
    />
    <Tab.Screen
      name="About"
      component={About}
      options={{
        tabBarLabel: ({ focused }) => {
          const opacity = focused ? 1 : 0.6
          return (
            <View style={[styles.tabLabel, { opacity }]}>
              <Image
                style={styles.tabLabelIcon}
                resizeMode="contain"
                source={require('../../assets/shield.png')}
              />
              <Text style={styles.tabLabelText}>O APLIKACIJI</Text>
            </View>
          )
        },
      }}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    alignItems: 'center',
  },
  tabLabelIcon: {
    height: 24,
    marginBottom: 4,
  },
  tabLabelText: {
    color: '#ffffff',
    fontFamily: 'oswald',
    fontSize: 10,
    letterSpacing: 0.15,
    lineHeight: 12,
  },
})

export default LoggedInApplication
