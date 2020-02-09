import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PickupsStack from '../../navigation/PickupsStack'
import About from './About'
import Community from './Community'

const Tab = createBottomTabNavigator()

const shouldShowTabBar = (route: any): boolean => {
  if (!route.state) {
    return true
  }

  const { routeNames, index } = route.state
  return routeNames[index] !== 'NewPickup'
}

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>PROFILE</Text>
  </View>
)

const LoggedInApplication = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#8dc63f',
        inactiveBackgroundColor: '#8dc63f',
      }}
      backBehavior="initialRoute"
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
        component={PickupsStack}
        options={({ route }) => ({
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
          tabBarVisible: shouldShowTabBar(route),
        })}
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
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    alignItems: 'center',
    marginBottom: 4,
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
