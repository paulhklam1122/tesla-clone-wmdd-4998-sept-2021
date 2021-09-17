import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Header = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/images/logo/logo.png')} style={styles.logo} />
    <Image source={require('../../../assets/images/menu/menu.png')} style={styles.menu} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
    width: '100%',
    zIndex: 100
  },
  logo: {
    height: 25,
    width: 100,
    resizeMode: 'contain'
  },
  menu: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
})

export default Header
