import { createSwitchNavigator } from '@react-navigation/compat'
import { NavigationContainer } from '@react-navigation/native'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import LoggedInApplication from './screens/LoggedInApplication'
import Login from './screens/Login'
import Register from './screens/Register'
import RegisterCollector from './screens/RegisterCollector'
import RegisterProvider from './screens/RegisterProvider'
import { appStart } from './store/actions'

const navigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
}

export default () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(appStart())
  }, [])

  const Switch = createSwitchNavigator(
    { SplashScreen, AuthStack, MainStack },
    {}
  )
  return (
    <NavigationContainer>
      <Switch />
    </NavigationContainer>
  )
}

const SplashScreen = ({ navigation }) => {
  const token = useSelector(({ auth }) => auth.token)

  useEffect(() => {
    navigation.navigate(token === '' ? 'AuthStack' : 'MainStack')
  }, [])
  return <View />
}

const MainStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoggedInApplication">
      <Stack.Screen
        name="LoggedInApplication"
        component={LoggedInApplication}
        options={navigationOptions}
      />
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Login"
      screenOptions={navigationOptions}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterProvider" component={RegisterProvider} />
      <Stack.Screen name="RegisterCollector" component={RegisterCollector} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
