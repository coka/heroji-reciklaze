import React from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import { colors, fonts } from '../StyleGuide'

interface InputProps extends TextInputProps {
  label: string
  white?: boolean
}

const Input = (props: InputProps) => (
  <View>
    <Text style={styles.label}>{props.label}</Text>
    <TextInput style={styles.input} selectionColor={colors.white} {...props} />
    <View style={styles.underline} />
  </View>
)

const styles = StyleSheet.create({
  input: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 18,
    lineHeight: 23,
    marginBottom: 5,
    marginTop: 12,
  },
  label: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16,
    lineHeight: 18,
  },
  underline: {
    backgroundColor: colors.white,
    height: 1,
  },
})

export default Input
