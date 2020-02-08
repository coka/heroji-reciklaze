import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Welcome = ({ navigation }) => {
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
        <TouchableOpacity
          style={styles.touchIcon}
          onPress={() => navigation.navigate('RegisterProvider')}
        >
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: 'white',
            }}
          />
          <Text style={styles.text}>SNABDEVAČ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchIcon}
          onPress={() => navigation.navigate('RegisterCollector')}
        >
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              borderWidth: 5,
              borderColor: 'white',
            }}
          />
          <Text style={styles.text}>SAKUPLJAČ</Text>
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
  touchIcon: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'oswald',
    color: 'white',
    fontSize: 24,
  },
  logoWhite: {
    height: 85,
    width: 240,
    marginVertical: 30,
  },
})
export default Welcome
