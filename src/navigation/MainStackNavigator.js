import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Welcome'
import Search from '../screens/Search'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTintColor: '#ffff',
          headerBackTitleVisible: false
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Search'
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
