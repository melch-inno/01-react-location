import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// Welcome Screen

function Home(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Find Location</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  text: {
    color: '#101010',
    fontSize: 30,
    marginTop: -300,
    fontFamily: "Arial"

    
  },
  buttonContainer: {
    backgroundColor: '#F21F1F',
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 25,
    marginTop: 200
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: "Helvetica"
  }
})

export default Home
