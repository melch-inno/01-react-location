import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// Welcome Screen

function Home(props) {
  const { navigation } = props
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <TouchableOpacity
        style={styles.buttonContainer}

        onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Find Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('virtualList')}>
        <Text style={styles.buttonText}>Virtual  List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('StatusBar')}>
        <Text style={styles.buttonText}>Status Bar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('SwichFunc')}>
        <Text style={styles.buttonText}>Switch </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ModalExmp')}>
        <Text style={styles.buttonText}>Modal </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('PressableExmp')}>
        <Text style={styles.buttonText}>Pressable </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ToDO')}>
        <Text style={styles.buttonText}>TODO </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ActivityIdicator')}>
        <Text style={styles.buttonText}>Activity Monitor </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('AvoidKeyBoard')}>
        <Text style={styles.buttonText}>Avoid Keyboard </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    margin: 2,
    padding: 5,
    paddingHorizontal: 25,
    // marginTop: 200
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: "Helvetica"
  }
})

export default Home
