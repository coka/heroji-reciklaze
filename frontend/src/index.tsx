import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import LoggedInApplication from './screens/LoggedInApplication'
import RegisterCollector from './screens/RegisterCollector'
import RegisterProvider from './screens/RegisterProvider'
import Welcome from './screens/Welcome'
import { appStart } from './store/actions/app'

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
        <Stack.Screen
          name="LoggedInApplication"
          component={LoggedInApplication}
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
