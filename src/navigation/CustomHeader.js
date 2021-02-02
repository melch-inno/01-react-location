import React, { useState } from 'react';
import { Button } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';


function CustomHeader(props) {
    // const [title, setTitle] = useState('title');
    // const { navigation } = props

        return (
            <View style={styles.header}>
                <AntDesign name="left" size={20} color="white" onPress={() => this.props}/>
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