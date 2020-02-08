import React from 'react'
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  label: string
  white?: boolean
}

const Input = (props: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={props.white ? styles.whiteLabel : styles.label}>
        {props.label}
      </Text>
      <TextInput
        style={props.white ? styles.whiteInput : styles.input}
        {...props}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: 'stretch',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray',
    color: 'dimgray',
    fontFamily: 'lato',
  },
  whiteInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontFamily: 'lato',
  },
  label: {
    color: 'darkgray',
    fontFamily: 'lato',
    fontSize: 12,
  },
  whiteLabel: {
    color: 'white',
    fontFamily: 'lato',
    fontSize: 12,
  },
})

export default Input
