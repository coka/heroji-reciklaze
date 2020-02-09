import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import PickupsStack from '../../navigation/PickupsStack'
import CollectorsPickups from '../screens/CollectorsPickups'
import { colors } from '../StyleGuide'
import About from './About'
import Community from './Community'
import Profile from './Profile'

const Tab = createBottomTabNavigator()

const shouldShowTabBar = (route: any): boolean => {
  if (!route.state) {
    return true
  }

  const { routeNames, index } = route.state
  return routeNames[index] !== 'NewPickup'
}

const LoggedInApplication = ({ navigation }) => {
  const userType = useSelector(({ auth }) => auth?.user?.type)
  if (userType === 2) {
    // provider
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#fbf7eb',
            borderTopWidth: 0,
            shadowColor: '#000000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
          },
        }}
        backBehavior="initialRoute"
      >
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              const opacity = focused ? 1 : 0.6
              const color = focused ? colors.green : '#333333'
              const icon = focused
                ? require('../../assets/profile.png')
                : require('../../assets/profile-inactive.png')
              return (
                <View style={styles.tabLabel}>
                  <Image
                    style={styles.tabLabelIcon}
                    resizeMode="contain"
                    source={icon}
                  />
                  <Text style={[styles.tabLabelText, { color, opacity }]}>
                    PROFIL
                  </Text>
                </View>
              )
            },
            tabBarVisible: shouldShowTabBar(route),
          })}
        />
        <Tab.Screen
          name="Pickups"
          component={PickupsStack}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              const opacity = focused ? 1 : 0.6
              const color = focused ? colors.green : '#333333'
              const icon = focused
                ? require('../../assets/pickups.png')
                : require('../../assets/pickups-inactive.png')
              return (
                <View style={styles.tabLabel}>
                  <Image
                    style={styles.tabLabelIcon}
                    resizeMode="contain"
                    source={icon}
                  />
                  <Text style={[styles.tabLabelText, { color, opacity }]}>
                    PREUZIMANJA
                  </Text>
                </View>
              )
            },
            tabBarVisible: shouldShowTabBar(route),
          })}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              const opacity = focused ? 1 : 0.6
              const color = focused ? colors.green : '#333333'
              const icon = focused
                ? require('../../assets/community.png')
                : require('../../assets/community-inactive.png')
              return (
                <View style={styles.tabLabel}>
                  <Image
                    style={styles.tabLabelIcon}
                    resizeMode="contain"
                    source={icon}
                  />
                  <Text style={[styles.tabLabelText, { color, opacity }]}>
                    ZAJEDNICA
                  </Text>
                </View>
              )
            },
            tabBarVisible: shouldShowTabBar(route),
          })}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={({ route }) => ({
            tabBarLabel: ({ focused }) => {
              const opacity = focused ? 1 : 0.6
              const color = focused ? colors.green : '#333333'
              const icon = focused
                ? require('../../assets/about.png')
                : require('../../assets/about-inactive.png')
              return (
                <View style={styles.tabLabel}>
                  <Image
                    style={styles.tabLabelIcon}
                    resizeMode="contain"
                    source={icon}
                  />
                  <Text style={[styles.tabLabelText, { color, opacity }]}>
                    O APLIKACIJI
                  </Text>
                </View>
              )
            },
            tabBarVisible: shouldShowTabBar(route),
          })}
        />
      </Tab.Navigator>
    )
  }

  return (
    // Collector
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#8dc63f',
        inactiveBackgroundColor: '#8dc63f',
      }}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="CollectorsPickups"
        component={CollectorsPickups}
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
                <Text style={styles.tabLabelText}>ISTORIJA</Text>
              </View>
            )
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
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
