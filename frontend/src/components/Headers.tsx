import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { colors } from '../StyleGuide'

const Headers = {
  Dark: () => {
    const insets = useSafeArea()

    return (
      <View style={[styles.darkContainer, { paddingTop: insets.top + 15 }]}>
        <Image
          style={{ height: 50 }}
          resizeMode="contain"
          source={require('../../assets/logo-green.png')}
        />
      </View>
    )
  },
  Light: () => {
    const insets = useSafeArea()

    return (
      <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
        <Image source={require('../../assets/logo-green.png')} />
      </View>
    )
  },
} as const

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomLeftRadius: 50,
    paddingBottom: 28,
  },
  darkContainer: {
    alignItems: 'center',
    backgroundColor: '#333333',
    borderBottomLeftRadius: 50,
    paddingBottom: 32,
  },
})

export default Headers
