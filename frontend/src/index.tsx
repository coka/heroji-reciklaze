import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch } from "react-redux"
import { appStart } from "./store/actions/app"

export default () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(appStart())
  }, [])

  return (
    <View style={styles.container}>
      <Text>ASDFAFasdasdDSF</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
