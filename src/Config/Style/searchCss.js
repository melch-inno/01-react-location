import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  autocompleteContainer: {
    zIndex: 1,
  },
  searchResultsContainer: {
    width: '100%',
    maxHeight:700,
    backgroundColor: '#fff',
    position: 'absolute',
  },
  dummmy: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },

  selectedLocation: {
    fontSize: 20,
  },

  resultItem: {
    flexDirection: 'row',
    paddingTop:10,
    width: '100%',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  locationtext: {
    padding:3,
  },
  searchBox: {
    width: '90%',
    height: 50,
    fontSize: 18,
    // borderRadius: 15,
    borderBottomLeftRadius:15,
    borderBottomStartRadius:15,
    borderTopLeftRadius:15,
    borderLeftWidth: 0,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    paddingLeft: 15,
  },
  searchIcon:{
    backgroundColor: 'white',
    borderTopRightRadius:15,
    height: 50,
    borderBottomRightRadius:15,
    width:'10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight:5,
  },

  autocompleteContainerHeader:{
    padding:2,
    margin:5,
    marginTop: 15,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
});