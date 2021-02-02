import React, { useState } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



function CustomHeader({ navigation }) {
        return (
            <View style={styles.header}>
                <AntDesign name="left" size={20} color="white" />
                <TouchableOpacity onPress={() => navigation.goBack()}><Text>something here</Text> </TouchableOpacity>
                {/* <ion-icon name="arrow-back"></ion-icon> */}
                <Text style={styles.headerText}> hello </Text>
            </View>
        )
}

const styles = StyleSheet.create({

    header: {
      flexDirection: "row",
      padding: 5,
    },
    headerText: {
        fontSize: 20,
    }
  });

export default CustomHeader;