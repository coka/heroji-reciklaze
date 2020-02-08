import React from 'react'
import { Text, View } from 'react-native'
import GreenButton from '../components/GreenButton'

interface NewPickupProps {
  navigation: any
}

const NewPickup = ({ navigation }: NewPickupProps) => (
  <View>
    <Text>NewPickup</Text>
    <GreenButton
      label="NAZAD"
      onPress={() => {
        navigation.goBack()
      }}
    />
  </View>
)

export default NewPickup
