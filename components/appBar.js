import { Appbar } from 'react-native-paper';
import React from 'react';
import { StyleSheet } from 'react-native';

const AppBarComponent = () =>{
    return(
        <Appbar.Header>
            <Appbar.Content title="Cool Schools"></Appbar.Content>
        </Appbar.Header>
    )

}

export default AppBarComponent;

const styles = StyleSheet.create({
    header:{
        height: 85,
        paddingTop: 45,
        backgroundColor: '#056965',
        alignItems:'center',
    },
    headerText:{
        color:'#fff',
        fontSize: 18,
    }

})
