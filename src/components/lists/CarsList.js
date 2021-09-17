import React from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import cars from '../../data/cars'

import CarListItem from '../listItems/CarListItem'

const CarsList = () => (
  <View style={styles.container}>
    <FlatList
      data={cars}
      renderItem={({ item, index }) => (
        <CarListItem key={index} car={item} keyExtractor={(item, index) => index} />
      )}
      showsVerticalScrollIndicator={false}
      snapToAlignment='start'
      snapToInterval={Dimensions.get('window').height}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

export default CarsList
