import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Headers from '../components/Headers'
import { colors, fonts } from '../StyleGuide'

const Register = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.imageBackground}
    >
      <Headers.Light />
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterProvider')}
        >
          <>
            <Image source={require('../../assets/provider.png')} />
            <Text style={styles.text}>SNABDEVAČ</Text>
          </>
        </TouchableOpacity>
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterCollector')}
        >
          <>
            <Image source={require('../../assets/collector.png')} />
            <Text style={styles.text}>SAKUPLJAČ</Text>
          </>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  separator: {
    height: 70,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.oswald,
    fontSize: 21,
    lineHeight: 27,
    marginTop: 20,
    textAlign: 'center',
  },
})
export default Register
