import React from 'react'
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Input from '../components/Input'

const Register = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/background.png')}
        resizeMode="cover"
      >
        <Image
          source={require('../../assets/logo-white.png')}
          style={styles.logoWhite}
          resizeMode="contain"
        />
        <Input label="E-mail adresa" />
        <Input label="Lozinka" />
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonSecondaryText}>Napravi Nalog</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWhite: {
    height: 85,
    width: 240,
    marginVertical: 30,
  },
  buttonSecondaryText: {
    fontFamily: 'oswald',
    color: 'white',
    fontSize: 18,
  },
})
export default Register
