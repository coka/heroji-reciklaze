import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import GreenButton from '../components/GreenButton'
import Header from '../components/Header'
import PickupList from '../components/PickupList'

interface PickupsProps {
  navigation: any
}

const Pickups = ({ navigation }: PickupsProps) => {
  const pickups = useSelector(state => state.app.pickups)
  const insets = useSafeArea()

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
      }}
    >
      <Header />
      <View style={styles.buttonContainer}>
        <GreenButton
          label="ZAKAŽI NOVO PREUZIMANJE"
          onPress={() => {
            navigation.navigate('NewPickup')
          }}
        />
      </View>
      <View style={styles.pickupListContainer}>
        <PickupList pickups={pickups} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 118,
    marginHorizontal: 20,
  },
  pickupListContainer: {
    flex: 1,
    marginHorizontal: 35,
  },
})

export default Pickups
