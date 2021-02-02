import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Welcome';
import Search from '../screens/Search';
import virtualList from '../screens/virtualList';
import StatusBar from '../screens/StatusBar';
import SwichFunc  from "../screens/SwichFunc";
import ModalExmp from '../screens/ModalExmp';
import PressableExmp from "../screens/PressableExmp";
import ToDO from '../screens/ToDo/TodoApp';
import ActivityIdicator from '../screens/ActivityIndicator';
import AvoidKeyBoard from '../screens/AvoidKeyBoard'


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)'
          },
          headerTintColor: '#ffff',
          headerBackTitleVisible: true
        }}
        headerMode='float'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name='Search'
          component={Search}
        />
        <Stack.Screen
          name='virtualList'
          component={virtualList}
          options={{title: 'Virtual', headerShown: false}}
        />
        <Stack.Screen
          name='StatusBar'
          component={StatusBar}
          options={{title: 'Status Bar'}}
        />
        <Stack.Screen
          name='SwichFunc'
          component={SwichFunc}
          options={{title: 'Switch Screen'}}
        />
        <Stack.Screen
          name='ModalExmp'
          component={ModalExmp}
          options={{title: 'Modal Screen'}}
        />
        <Stack.Screen
          name='PressableExmp'
          component={PressableExmp}
          options={{title: 'Pressable Screen'}}
        />
        <Stack.Screen
          name='ToDO'
          component={ToDO}
          options={{title: 'Pressable Screen', headerShown: false}}
        />
        <Stack.Screen
          name='ActivityIdicator'
          component={ActivityIdicator}
          options={{title: 'Activity Screen'}}
        />
        <Stack.Screen
          name='AvoidKeyBoard'
          component={AvoidKeyBoard}
          options={{title: 'Avoid Keyboord Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator
