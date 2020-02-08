import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Header from '../components/Header'

const mockPickupData = new Array(9)

const Pickups = () => {
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
        <FlatList
          data={mockPickupData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ index }) => {
            const state: PickupState =
              index % 2 === 0 ? 'SUCCESSFUL' : 'PENDING'
            return <Pickup state={state} />
          }}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  )
}

const Separator = () => (
  <View
    style={{
      backgroundColor: '#a9a9a9',
      height: 1,
      marginVertical: 6,
    }}
  />
)

interface PickupProps {
  state: PickupState
}

type PickupState = 'PENDING' | 'SUCCESSFUL'

const Pickup = ({ state }: PickupProps) => {
  return (
    <View style={pickupStyles.container}>
      <View>
        <Text style={pickupStyles.text}>07 - 02 - 2020 | 12:30</Text>
      </View>
      <View style={pickupStyles.iconsContainer}>
        {state === 'SUCCESSFUL' ? <Icons.Successful /> : <Icons.Pending />}
        <Icons.Edit />
        <Icons.Cancel />
      </View>
    </View>
  )
}

const pickupStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  text: {
    color: '#696969',
    fontFamily: 'lato',
    fontSize: 14,
    lineHeight: 18,
  },
})

const cancel = require('../../assets/cancel.png')
const edit = require('../../assets/edit.png')
const pending = require('../../assets/pending.png')
const successful = require('../../assets/successful.png')
const Icons = {
  Cancel: () => <Image style={styles.icon} source={cancel} />,
  Edit: () => <Image style={styles.icon} source={edit} />,
  Pending: () => <Image style={styles.icon} source={pending} />,
  Successful: () => <Image style={styles.icon} source={successful} />,
} as const

const styles = StyleSheet.create({
  icon: {
    height: 24,
    marginLeft: 15,
    width: 24,
  },
  pickupListContainer: {
    flex: 1,
    marginHorizontal: 35,
  },
})

export default Pickups
