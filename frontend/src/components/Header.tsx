import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const logo = require('../../assets/logo.png')

const Header = () => (
  <View style={styles.container}>
    <Image style={styles.logo} source={logo} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 52,
    marginTop: 15,
  },
  logo: {
    height: 50,
    width: 134,
  },
})

export default Header
