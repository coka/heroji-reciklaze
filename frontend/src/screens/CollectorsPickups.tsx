import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import PickupList from '../components/PickupList'
import { fetchPickups } from '../store/actions/pickup'

interface PickupsProps {
  navigation: any
}

const Pickups = ({ navigation }: PickupsProps) => {
  const pickups = useSelector(({ pickup }) => pickup.pickups)
  const insets = useSafeArea()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPickups())
  }, [])

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
      }}
    >
      <Header />
      <View style={styles.pickupListContainer}>
        <PickupList pickups={pickups.filter(pickup => pickup.status === 1)} />
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
