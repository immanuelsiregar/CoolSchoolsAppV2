import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Cool Schools</Text>
        </View>

    )
}

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