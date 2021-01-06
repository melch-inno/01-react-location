import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Detail(props) {
  const { route, navigation } = props
  const { item } = route.params
  const { name, home, species } = item
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Name: {name}</Text>
        <Text style={styles.cardText}>Home Planet: {home}</Text>
        <Text style={styles.cardText}>Species: {species}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Search')}>
        {/* <Text style={styles.buttonText}>Go to Search</Text> */}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
  },
  card: {
    width: 350,
    height: 100,
    borderRadius: 15,
    // backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 16,
    color: '#ffff',
    marginBottom: 5
  },
  // buttonContainer: {
  //   backgroundColor: '#222',
  //   borderRadius: 5,
  //   padding: 10,
  //   margin: 20
  // },
  // buttonText: {
  //   fontSize: 20,
  //   color: '#fff'
  // }
})

export default Detail
