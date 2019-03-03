import React, {Component} from 'react';

import {
    View,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';

export default class InputTex extends Component{

  state = {
    placeName: "",
  }

  placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event,
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }
    
    this.props.placeSubmitHandler(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.placeInput}
        placeholder='An awesome place'
        value={this.props.placeName} 
        onChangeText={this.placeNameChangeHandler}
      />
      <Button style={styles.placeButton} title="Add" onPress={this.placeSubmitHandler}/>
      </View>
    )
  } 
}
 

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
    placeInput: {
        width: '70%',
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20,
      },
      placeButton: {
        width: '30%'
      },
});
