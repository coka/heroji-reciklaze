import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Headers from '../components/Headers'
import { colors, fonts } from '../StyleGuide'

const Profile = () => (
  <View style={styles.container}>
    <Headers.Dark />
    <ScrollView style={styles.content}>
      <View style={styles.statistics}>
        <Row>
          <View>
            <Row>
              <Badge icon={icons.plastic} count={42} noMargin />
              <Badge icon={icons.cardboard} count={42} />
              <Badge icon={icons.glass} count={42} />
            </Row>
            <Row>
              <Badge icon={icons.tin} count={42} noMargin />
              <Badge icon={icons.all} count={42} />
            </Row>
          </View>
          <View style={styles.total}>
            <Text style={styles.totalLabel}>Ukupan{'\n'}broj akcija:</Text>
            <Text style={styles.totalCount}>17</Text>
          </View>
        </Row>
      </View>
      <View style={styles.account}>
        <View style={styles.accountDetails}>
          <View>
            <View style={styles.accountDetailsLine} />
          </View>
          <View style={styles.accountDetailsText}>
            <Text
              style={[
                styles.text,
                {
                  textTransform: 'uppercase',
                },
              ]}
            >
              Ime korisnika
            </Text>
            <Text
              style={[
                styles.text,
                {
                  textTransform: 'uppercase',
                },
              ]}
            >
              Prezime korisnika
            </Text>
            <View style={styles.separator} />
            <Text style={styles.text}>+381 64 123-45-67</Text>
            <Text style={styles.text}>Laze Nančića 36</Text>
            <Text style={styles.text}>email.adresa@gmail.com</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            onPress={() => {
              // TODO: Log out.
            }}
          >
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles.text}>IZLOGUJ SE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </View>
)

const icons = {
  plastic: require(`../../assets/plastic.png`),
  cardboard: require(`../../assets/cardboard.png`),
  glass: require(`../../assets/glass.png`),
  tin: require(`../../assets/tin.png`),
  all: require(`../../assets/all.png`),
} as const

const Badge = ({ icon, count, noMargin = false }) => (
  <View style={[badgeStyles.container, noMargin ? { marginLeft: 0 } : {}]}>
    <Image style={badgeStyles.icon} source={icon} />
    <Text style={badgeStyles.count}>{count}</Text>
  </View>
)

const badgeSize = 55
const badgeStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#666666',
    borderRadius: badgeSize / 2,
    borderWidth: 1,
    flexDirection: 'row',
    height: badgeSize,
    justifyContent: 'center',
    marginLeft: 13,
    width: badgeSize,
  },
  count: {
    color: '#666666',
    fontFamily: fonts.oswald,
    fontSize: 24,
  },
  icon: {
    marginRight: 5,
  },
})

const Row = ({ children }) => (
  <View
    style={{
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    }}
  >
    {children}
  </View>
)

const totalSize = 120
const styles = StyleSheet.create({
  account: {
    backgroundColor: colors.green,
    borderTopRightRadius: 50,
    marginBottom: 43,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 25,
    paddingTop: 30,
  },
  accountDetails: {
    flexDirection: 'row',
  },
  accountDetailsLine: {
    backgroundColor: colors.white,
    flex: 1,
    marginRight: 20,
    width: 2,
  },
  accountDetailsText: {
    paddingVertical: 8,
  },
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  content: {
    paddingHorizontal: 25,
  },
  separator: {
    height: 25,
  },
  statistics: {
    marginBottom: 77,
    marginTop: 50,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 18,
    lineHeight: 27,
  },
  total: {
    alignItems: 'center',
    backgroundColor: '#666666',
    borderRadius: totalSize / 2,
    height: totalSize,
    justifyContent: 'center',
    marginLeft: 10,
    width: totalSize,
  },
  totalLabel: {
    color: colors.background,
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: 'center',
  },
  totalCount: {
    color: colors.background,
    fontFamily: fonts.oswald,
    fontSize: 36,
  },
})

export default Profile
