import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.input} value="value" {...props} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray',
    color: 'dimgray',
    fontFamily: 'lato',
  },
  label: {
    color: 'darkgray',
    fontFamily: 'lato',
    fontSize: 12,
  },
})

export default Input
