import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { acceptPickup, declinePickup } from '../store/actions/pickup'
import { useDispatch } from 'react-redux'

interface PickupListProps {
  pickups: Array<Pickup>
}

const PickupList = ({ pickups = [] }: PickupListProps) => (
  <FlatList
    data={pickups}
    keyExtractor={pickup => pickup.id}
    renderItem={({ item }) => <Pickup pickup={item} />}
    ItemSeparatorComponent={Separator}
  />
)

interface PickupProps {
  pickup: Pickup
}

const Pickup = ({ pickup }: PickupProps) => {
  const dispatch = useDispatch()
  return (
    <View style={pickupStyles.container}>
      <View>
        <Text style={pickupStyles.text}>
          {pickup.pickupDate} | ~TODO~ 12:30 ~TODO~
        </Text>
        <Text style={pickupStyles.text}>{pickup.address.value}</Text>
        <Text style={pickupStyles.text}>{pickup.code}</Text>
        {pickup.status === 1 && (
          <View style={pickupStyles.buttonsRowContainer}>
            <View style={pickupStyles.buttonsRow}>
              <TouchableOpacity
                onPress={() => dispatch(acceptPickup(pickup.id))}
                style={pickupStyles.buttonAccept}
              >
                <Text style={pickupStyles.buttonText}>PRIHVATI</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(declinePickup(pickup.id))}
                style={pickupStyles.buttonCancel}
              >
                <Text style={pickupStyles.buttonText}>ODBIJ</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <View style={pickupStyles.iconsContainer}>
        {pickup.status === 1 ? <Icons.Successful /> : <Icons.Pending />}
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
  buttonsRowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  buttonsRow: {
    flexDirection: 'row',
  },
  buttonAccept: {
    flex: 1,
    backgroundColor: '#8DC63F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonCancel: {
    height: 35,
    flex: 1,
    backgroundColor: '#F53838',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
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

const Separator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  icon: {
    height: 24,
    marginLeft: 15,
    width: 24,
  },
  separator: {
    backgroundColor: '#a9a9a9',
    height: 1,
    marginVertical: 6,
  },
})

export default PickupList
