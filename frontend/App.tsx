import { AppLoading } from 'expo'
import { loadAsync } from 'expo-font'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import App from './src'
import store from './src/store'

const fetchFonts = () =>
  loadAsync({
    oswald: require('./assets/fonts/Oswald-Regular.ttf'),
    lato: require('./assets/fonts/Lato-Regular.ttf'),

    italic: require('./assets/fonts/SourceSansPro-Italic.ttf'),
    light: require('./assets/fonts/SourceSansPro-Light.ttf'),
    regular: require('./assets/fonts/SourceSansPro-Regular.ttf'),
    semiBold: require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
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
