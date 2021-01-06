import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import '../Config/Data/item';
import styles from '../Config/Style/searchCss.js'


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ChosedLocation: 'Type location here',
      searchKeyword: '',
      searchResults: [],
      isShowingResults: false,
    };
  }

  searchLocation = async (text) => {
    this.setState({searchKeyword: text});
    if(text == ""){
      this.setState({
        isShowingResults: false,
      })
    }else{
      this.setState({
        searchResults: location.predictions.filter( l => {
          return l.description.match( text );
         }),
        isShowingResults: true,
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.autocompleteContainer}>
          <View style={styles.autocompleteContainerHeader}>
              <TextInput
                placeholder="Location"
                returnKeyType="search"
                style={styles.searchBox}
                placeholderTextColor="#000"
                onChangeText={(text) => this.searchLocation(text)}
                underlineColorAndroid="transparent"
                value={this.state.searchKeyword}
              />
              <View style={styles.searchIcon}>
                  <Ionicons name="ios-search" size={30} color="red"/>
              </View>
          </View>
          <View style={styles.seearchDropdown}>
          
          {this.state.isShowingResults && (
            <FlatList
              data={this.state.searchResults}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={styles.resultItem}
                      onPress={() => 
                      this.setState({
                        searchKeyword: item.description,
                        ChosedLocation: 'You chose '+ item.description,
                        isShowingResults: false,
                      })
                    }>
                      
                     <Ionicons name="location" size={20} color="black"/>
                    <Text style={styles.locationtext}>{item.description + ' -' + item.code}</Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
              style={styles.searchResultsContainer}
            />
          )}
        </View>
        </View>
        <View style={styles.dummmy} >
            <Text style={styles.selectedLocation}>{this.state.ChosedLocation}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

