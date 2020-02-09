import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import Headers from '../components/Headers'
import { colors, fonts } from '../StyleGuide'

const About = () => {
  const insets = useSafeArea()

  return (
    <View style={styles.container}>
      <Headers.Dark />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.text}>
          JCI Novi Sad i Telenor fondacija veruju da je došlo vreme da sve
          potencijale tehnologije iskoristimo i u Novom Sadu. Izradom aplikacije
          „Heroji reciklaže” želeli smo da ponudimo društvenoj zajednici
          delotvorno i održivo rešenje za povećanje količine ambalažnog otpada
          koji završava u procesu reciklaže.{'\n\n'}
          Ambalažni otpad predstavlja materijal koji se koristi u proizvodnom
          ciklusu kako bi se pakovala i transportovala roba široke potrošnje.
          Šta se dešava sa ambalažom kada iskoristimo njen sadržaj?{'\n'}Ona
          uglavnom završava kao otpad onog trenutka kada ispraznimo njen
          sadržaj. Kada nekoliko stotina hiljada ljudi, zadovoljavajući svoje
          potrebe, dnevno napravi do dva kilograma otpada po samo jednom čoveku
          dobijamo zabrinjavajuću računicu koja nas upućuje na zaključak da
          neophodno prilagoditi se savremenim razvojnim tendencijama i
          odgovornije se odnositi prema otpadu. Stanovnik Srbije godišnje
          proizvede oko 300 kilograma otpada, od čega se reciklira četiri odsto
          i najveći deo se odlaže na deponije.
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  contentContainer: {
    marginBottom: 52,
    marginHorizontal: 20,
    paddingHorizontal: 18,
    paddingVertical: 32,
  },
  text: {
    color: '#333333',
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 18,
  },
})

export default About
