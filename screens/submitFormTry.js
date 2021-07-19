/*
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, Button, View, TextInput, TouchableOpacity, Image, CheckBox, ScrollView } from 'react-native';
import Header from '../components/header';
const ConflictCauses = require ('../listData/conflictCauses.json');
import Constants from 'expo-constants';
//import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const conflictCauses = [
    {id: 1, checkText: "Accident", isChecked: false},
    {id: 2, checkText: "Misunderstanding", isChecked: false},
    {id: 3, checkText: "Game Rules", isChecked: false},
    {id: 4, checkText: "Taking Turns", isChecked: false},
    {id: 5, checkText: "Teasing", isChecked: false},
    {id: 6, checkText: "Possession/Ownership", isChecked: false},
    {id: 7, checkText: "Name Calling", isChecked: false},
    {id: 8, checkText: "Friendship Issues", isChecked: false},
    {id: 9, checkText: "Exclusion", isChecked: false},
    {id: 10, checkText: "Rumours/Gossip", isChecked: false},
    {id: 11, checkText: "Other", isChecked: false},
    
]

/*
const conflictMediation = [
    {id: 1, checkText: "You offered to mediate", isChecked: false},
    {id: 2, checkText: "A teacher suggested it", isChecked: false},
    {id: 3, checkText: "Another student suggested it", isChecked: false},
    {id: 4, checkText: "Disputants asked you to", isChecked: false},
    {id: 5, checkText: "Other", isChecked: false},
]
*/
/*
export default class SubmitForm extends Component() {
    constructor(props){
        super(props);
        this.state = {
            products: conflictCauses,
        };
    }

    handleChange = (id) => {
        let temp = this.state.products.map((product) => {
            if (id === product.id){
                return { ...product, isChecked: !product.isChecked};
            }
            return product;
        });
        this.setState({
            products: temp,
        });
    };

    renderCheckBox = (renderConflictCauses) =>{
        return(
            <View>
                renderConflictCauses{({item}) =>(
                    <CheckBox>
                    value = {item.isChecked}
                    onChange={()=>{
                        this.handleChange(item.id);
                    }}
                    </CheckBox>
                )
                }
            </View>
        )
            
    }

    render(){
        let selected = this.state.products?.filter((product) => product.isChecked);
        return (
        <ScrollView stickyHeaderIndices={[0]}>
            <Header/>
            <Text>Name of Mediator:</Text>
            <TextInput style={styles.inputBox}/>
            <Text>Name of Person A:</Text>
            <TextInput style={styles.inputBox}/>
            <Text>Name of Person B:</Text>
            <TextInput style={styles.inputBox}/>
            <Text>Cause of Conflict:</Text>

            <div className="you">
                <input type="checkbox" id="you" name="you" value="Cringe" checked={isChecked} onChange={handleOnChange}/>You lol
            </div>

        </ScrollView>
    );
        }
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
*/
