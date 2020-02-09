import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Headers from '../components/Headers'
import { DarkInput as Input } from '../components/Input'
import { colors } from '../StyleGuide'
import { useDispatch } from 'react-redux'
import { register } from '../store/actions/auth'

const Separator = () => <View style={{ height: 15 }} />

const RegisterProvider = ({ navigation }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addressValue, setAddress] = useState('')
  const [telephone, setTelephone] = useState('+381')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')

  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        StatusBar.setBarStyle('light-content')
      }

      return () => {
        StatusBar.setBarStyle('dark-content')
      }
    }, [isFocused])
  )

  return (
    <KeyboardAvoidingView style={styles.screen} behavior="height" enabled>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Headers.Dark />
        <View style={styles.padded}>
          <Input label="Ime" value={firstName} onChangeText={setFirstName} />
          <Separator />
          <Input label="Prezime" value={lastName} onChangeText={setLastName} />
          <Separator />
          <Separator />
          <Input
            label="Telefon"
            value={telephone}
            onChangeText={setTelephone}
            keyboardType="phone-pad"
          />
          <Separator />
          <Input
            label="Adresa"
            value={addressValue}
            onChangeText={setAddress}
          />
          <Separator />
          <Separator />
          <Input label="Email" value={email} onChangeText={setEmail} />
          <Separator />
          <Input
            label="Lozinka"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Separator />
          <Input
            label="Ponovi lozinku"
            value={passConfirm}
            onChangeText={setPassConfirm}
            secureTextEntry
          />
          <Separator />
          <Separator />
          <Separator />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              dispatch(
                register({
                  firstName,
                  lastName,
                  addressValue,
                  telephone,
                  email,
                  password,
                  type: 2,
                })
              )
            }
          >
            <Text style={styles.buttonText}>KERIRAJ NALOG</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.background,
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
  padded: {
    paddingHorizontal: 35,
    paddingTop: 35,
  },
})

export default RegisterProvider
