import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'

const CarListItem = props => {
  const { name, tagline, taglineCTA, image } = props.car

  console.log('tag line CTA', props.car.taglineCTA)

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carContainer: {
    height: Dimensions.get('window').height,
    width: '100%'
  },
  image: {
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%'
  },
  titles: {
    alignItems: 'center',
    marginTop: '30%',
    width: '100%'
  },
  title: {
    fontSize: 40,
    fontWeight: '600'
  },
  subtitle: {
    color: '#5c5e62',
    fontSize: 16
  },
  subtitleCTA: {
    textDecorationLine: 'underline'
  }
})

export default CarListItem
