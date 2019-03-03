import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  View, 
} from 'react-native';
import InputText from './src/components/InputText/InputText';
import DisplayList from './src/components/DisplayList/DisplayList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component{
  state = {
    places: [],
    selectedPlace: null,
  }

  placeSubmitHandler = placeName => {
    this.setState(prevState=> {
      return {
        places: prevState.places.concat({
          key: ''+Math.random(), 
          name: placeName,
          image: {
            uri: "https://via.placeholder.com/600/197d29"
          },
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter( place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    });   
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null,
    })
  }

  placeSelectedHandler = index => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === index;
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}/>
        <InputText placeSubmitHandler={this.placeSubmitHandler}/>
        <DisplayList 
          places = {this.state.places}
          onItemSelected = {this.placeSelectedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
