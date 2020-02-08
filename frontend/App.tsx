import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from './src/store'
import App from './src'
import { loadAsync } from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () =>
  loadAsync({
    oswald: require('./assets/fonts/Oswald-Regular.ttf'),
    lato: require('./assets/fonts/Lato-Regular.ttf'),
  })

export default () => {
  const [fontloaded, setfontloaded] = useState(false)
  if (!fontloaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setfontloaded(true)
        }}
        onError={console.warn}
      />
    )
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
