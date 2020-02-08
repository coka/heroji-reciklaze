import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Input from '../components/Input'

const Separator = () => <View style={{ height: 20 }} />

const RegisterProvider = ({ navigation }) => {
  const [ime, setIme] = useState('')
  const [prezime, setPrezime] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('+381')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ flex: 1, height: '100%', backgroundColor: 'blue' }}
          >
            <Entypo name="chevron-left" size={36} />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/logo.png')}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={{ flex: 1, height: '100%', backgroundColor: 'blue' }}
          ></TouchableOpacity>
        </View>
        <Input label="Ime" value={ime} onChangeText={setIme} />
        <Input label="Prezime" value={prezime} onChangeText={setPrezime} />
        <Separator />
        <Input label="Adresa" value={address} onChangeText={setAddress} />
        <Input
          label="Telefon"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
        />
        <Separator />
        <Input label="Email" value={email} onChangeText={setEmail} />
        <Input label="Lozinka" value={password} onChangeText={setPassword} />
        <Input
          label="Ponovi lozinku"
          value={passConfirm}
          onChangeText={setPassConfirm}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('LoggedInApplication')}
        >
          <Text style={styles.buttonText}>KERIRAJ NALOG</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  logoContainer: {
    flex: 4,
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 160,
  },
  screen: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 35,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#8DC63F',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'oswald',
  },
})

export default RegisterProvider
