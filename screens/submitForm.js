import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Header from '../components/header';

export default function SubmitForm() {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Header/>
            <Text>Name of Mediator:</Text>
            <TextInput style={styles.inputBox}/>
            <Text>Name of Person A:</Text>
            <TextInput style={styles.inputBox}/>
            <Text>Name of Person B:</Text>
            <TextInput style={styles.inputBox}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputBox:{
        borderWidth: 1,
        borderColor: '#056965',
        padding: 8,
        margin: 10,
        width: 200,
    }
})