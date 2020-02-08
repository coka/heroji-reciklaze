import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import NewPickup from '../src/screens/NewPickup'
import Pickups from '../src/screens/Pickups'

const Stack = createStackNavigator()

const PickupsStack = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Pickups" mode="modal">
    <Stack.Screen name="Pickups" component={Pickups} />
    <Stack.Screen name="NewPickup" component={NewPickup} />
  </Stack.Navigator>
)

export default PickupsStack
