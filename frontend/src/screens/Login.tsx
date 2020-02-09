import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSafeArea } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import Input from '../components/Input'
import { logIn } from '../store/actions/auth'
import { colors, fonts } from '../StyleGuide'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const insets = useSafeArea()

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={require('../../assets/background.png')}
      resizeMode="cover"
    >
      <KeyboardAvoidingView behavior="height" enabled>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={[styles.header, { paddingTop: insets.top }]}>
              <Image
                source={require('../../assets/logo-green.png')}
                style={styles.logoWhite}
                resizeMode="contain"
              />
            </View>
            <View style={styles.center}>
              <View style={{ paddingHorizontal: 15 }}>
                <Input
                  autoCapitalize="none"
                  white
                  label="E-mail adresa"
                  value={email}
                  onChangeText={setEmail}
                />
                <View style={{ height: 45 }} />
                <Input
                  white
                  label="Lozinka"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              <View style={{ height: 60 }} />
              <TouchableOpacity
                style={styles.button}
                disabled={!email.match(/.*@.*\..*/)}
                onPress={() => dispatch(logIn(email, password))}
              >
                <Text style={styles.buttonText}>ULOGUJ SE</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={[
                  styles.bottomText,
                  { marginBottom: insets.bottom + 40 },
                ]}
              >
                NAPRAVI NALOG
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bottomText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fbf7eb',
    borderBottomLeftRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWhite: {
    height: 85,
    width: 240,
    marginBottom: 28,
    marginTop: 10,
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
    height: 48,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#8DC63F',
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 22,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
})
export default Login
