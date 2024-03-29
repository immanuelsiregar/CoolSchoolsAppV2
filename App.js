import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { styles } from 'styled-system';
import Header from './components/header';
import Home from './screens/home';
import InitialPage from './screens/initialPage';
import MediationProcess from './screens/mediationProcess';
import SubmitForm from './screens/submitForm';

export default class App extends React.Component{
  //console.log("App executed.");
  //remove the console logging after development/testing, it has negative impact on performance
  render(){
    return(
      <View style = {styles.container}>
        <Text>Hello World</Text>
      </View>
    )
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
