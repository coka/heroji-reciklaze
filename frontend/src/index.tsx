import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { appStart } from './store/actions/app'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './screens/Welcome'
import RegisterProvider from './screens/RegisterProvider'
import RegisterCollector from './screens/RegisterCollector'
import { CardStyleInterpolators } from '@react-navigation/stack'

export default () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(appStart())
  }, [])

  const Stack = createStackNavigator()

  const navigationOptions = {
    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={navigationOptions}
        />
        <Stack.Screen
          name="RegisterProvider"
          component={RegisterProvider}
          options={navigationOptions}
        />
        <Stack.Screen
          name="RegisterCollector"
          component={RegisterCollector}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
