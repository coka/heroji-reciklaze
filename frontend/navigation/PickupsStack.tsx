import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import React from 'react'
import NewPickup from '../src/screens/NewPickup'
import Pickups from '../src/screens/Pickups'

const Stack = createStackNavigator()

const PickupsStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Pickups">
    <Stack.Screen name="Pickups" component={Pickups} />
    <Stack.Screen
      name="NewPickup"
      component={NewPickup}
      // The tab bar visibility toggle is janky when the parent navigator uses a
      // modal mode.
      options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
    />
  </Stack.Navigator>
)

export default PickupsStack
