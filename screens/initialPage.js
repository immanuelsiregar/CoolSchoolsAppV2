import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Header from '../components/header';

export default function InitialPage() {
  //console.log("App executed.");
  //remove the console logging after development/testing, it has negative impact on performance
  const handlePress = () => console.log("Text pressed");
  
  return (
    
    <SafeAreaView style={styles.container}>
    
      <Text numberOfLines={1} onPress={handlePress} style={styles.titleText}>{'Welcome to the Cool Schools App!\n'}</Text>
        <TouchableOpacity onPress={()=> console.log("Image Tapped!")}>
        <Image 
          style={styles.tpfLogo}
          source={
            require('../assets/peacefoundationlogo.png')
            }/>
          <View style={{backgroundColor:"#056965", padding:5, margin: 5}}>
              <Button alignItems='center' color='#fff' title="Log in"/>
          </View>
        </TouchableOpacity> 
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#056965',
    margin: 10,
  },
  tpfLogo:{
    width: 200,
    height: 200,
    alignItems: 'center',
  },
});