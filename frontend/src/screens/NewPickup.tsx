import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreenButton from '../components/GreenButton'
import Input from '../components/Input'
import ResourceSelector from '../components/ResourceSelector'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { createPickup } from '../store/actions/pickup'

interface NewPickupProps {
  navigation: any
}

const NewPickup = ({ navigation }: NewPickupProps) => {
  const dispatch = useDispatch()
  const [resourceIds, setResourceIds] = useState([])
  const [code, setCode] = useState('2G3H4')
  const [pickupDate, setPickupDate] = useState(Date.now())

  const pickups = useSelector(({ pickup }) => pickup.pickups)

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginTop: 16 }}>
            <Text
              style={[styles.title, { marginTop: 16, textAlign: 'center' }]}
            >
              ZAKAZIVANJE
            </Text>
          </View>
          <View style={{ marginTop: 34 }}>
            <Text style={styles.title}>Odaberite vrstu otpada:</Text>
          </View>
          <ResourceSelector sendResources={setResourceIds} />
          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>
              Odaberite datum i vreme preuzimanja:
            </Text>
          </View>
          <Text>TODO: Dejt piker.</Text>
          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>Adresa preuzimanja:</Text>
          </View>
          <Input label="Adresa" value="Laze Nančića 36" white />
          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>Dodeli bezbednosnu šifru:</Text>
          </View>
          <Input
            label="Bezbednosna šifra*"
            value={code}
            white
            onChangeText={setCode}
          />
          <Text>
            TODO: Bezbednosna šifra sastoji se od 5 proizvoljnih karaktera
          </Text>
          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>Napomena:</Text>
          </View>
          <Input
            label="Napomena"
            value="Ako imate neku napomenu ovo je pravo mesto za takvu radnju."
            white
          />
          <GreenButton
            disabled={resourceIds.length === 0}
            label="ZAKAŽI"
            onPress={() => {
              dispatch(
                createPickup({
                  resourceIds,
                  code,
                  pickupDate,
                })
              )
            }}
          />
          <GreenButton
            label="ODUSTANI"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8dc63f',
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'oswald',
    fontSize: 18,
    lineHeight: 22,
  },
})

export default NewPickup
