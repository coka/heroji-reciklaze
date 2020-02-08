import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface GreenButtonProps {
  label: string
  onPress: () => void
}

const GreenButton = ({ label, onPress }: GreenButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#8DC63F',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'oswald',
  },
})

export default GreenButton
