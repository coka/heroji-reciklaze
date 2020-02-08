import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Header from '../components/Header'
import PickupList from '../components/PickupList'

const Community = () => {
  const insets = useSafeArea()

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
      }}
    >
      <Header />
      <View style={styles.pickupListContainer}>
        <PickupList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pickupListContainer: {
    flex: 1,
    marginHorizontal: 35,
  },
})

export default Community
