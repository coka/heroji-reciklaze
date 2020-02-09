import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GreenButton from '../components/GreenButton'
import Input from '../components/Input'
import ResourceSelector from '../components/ResourceSelector'
import { ScrollView } from 'react-native-gesture-handler'

interface NewPickupProps {
  navigation: any
}

const NewPickup = ({ navigation }: NewPickupProps) => (
  <View style={styles.container}>
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 16 }}>
          <Text style={[styles.title, { marginTop: 16, textAlign: 'center' }]}>
            ZAKAZIVANJE
          </Text>
        </View>
        <View style={{ marginTop: 34 }}>
          <Text style={styles.title}>Odaberite vrstu otpada:</Text>
        </View>
        <ResourceSelector />
        <View style={{ marginTop: 35 }}>
          <Text style={styles.title}>Odaberite datum i vreme preuzimanja:</Text>
        </View>
        <Text>TODO: Dejt piker.</Text>
        <View style={{ marginTop: 35 }}>
          <Text style={styles.title}>Adresa preuzimanja:</Text>
        </View>
        <Input label="Adresa" value="Laze Nančića 36" white />
        <View style={{ marginTop: 35 }}>
          <Text style={styles.title}>Dodeli bezbednosnu šifru:</Text>
        </View>
        <Input label="Bezbednosna šifra*" value="2G3H4" white />
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
          label="ZAKAŽI"
          onPress={() => {
            navigation.goBack()
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
