import React, { useState } from 'react'
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Input from '../components/Input'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../../assets/background.png')}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo-white.png')}
            style={styles.logoWhite}
            resizeMode="contain"
          />
        </View>
        <View style={styles.center}>
          <Input
            white
            label="E-mail adresa"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            white
            label="Lozinka"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.button}
            disabled={!email.match(/.*@.*\.com/)}
          >
            <Text style={styles.buttonText}>ULOGUJ SE</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonSecondaryText}>Napravi Nalog</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 1,
    padding: 35,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWhite: {
    height: 85,
    width: 240,
    marginVertical: 30,
  },
  buttonSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  buttonSecondaryText: {
    fontFamily: 'oswald',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#8DC63F',
    fontFamily: 'oswald',
  },
  center: {
    flex: 1,
  },
})
export default Login
