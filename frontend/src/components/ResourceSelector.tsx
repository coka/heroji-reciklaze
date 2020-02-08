import React, { useState } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const ResourceSelector = () => {
  const [plastic, setPlastic] = useState(false)
  const [cardboard, setCardboard] = useState(false)
  const [glass, setGlass] = useState(false)
  const [tin, setTin] = useState(false)

  const toggleAll = () => {
    const currentSelections = [plastic, cardboard, glass, tin]
    const setters = [setPlastic, setCardboard, setGlass, setTin]
    const hasUnselectedResource = currentSelections.some(value => !value)
    if (hasUnselectedResource) {
      setters.forEach(setter => setter(true))
    } else {
      setters.forEach(setter => setter(false))
    }
  }
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: -15,
        }}
      >
        <ResourceBox
          active={plastic}
          label="PET"
          onPress={() => {
            setPlastic(!plastic)
          }}
        />
        <ResourceBox
          active={cardboard}
          label="Karton"
          onPress={() => {
            setCardboard(!cardboard)
          }}
        />
        <ResourceBox
          active={glass}
          label="Staklo"
          onPress={() => {
            setGlass(!glass)
          }}
        />
        <ResourceBox
          active={tin}
          label="Konzerve"
          onPress={() => {
            setTin(!tin)
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <ResourceBox
          active={plastic && cardboard && glass && tin}
          label="Sve"
          onPress={toggleAll}
          bla
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

interface ResourceBoxProps {
  active: boolean
  label: string
  onPress: () => void
  bla?: boolean
}

const ResourceBox = ({ active, bla, label, onPress }: ResourceBoxProps) => {
  const backgroundColor = active ? '#ffffff' : 'transparent'
  const color = active ? '#8dc63f' : '#ffffff'

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          resourceBoxStyles.container,
          { backgroundColor },
          bla ? { marginLeft: 0 } : {},
        ]}
      >
        <Text style={[resourceBoxStyles.text, { color }]}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const resourceBoxStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 15,
    flex: 1,
  },
  text: {
    fontFamily: 'oswald',
    fontSize: 16,
    lineHeight: 16 + 15 * 2,
  },
})

export default ResourceSelector
