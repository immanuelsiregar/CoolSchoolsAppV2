import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from 'styled-system';

export default class CoordinatorMenuButtons extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text>View Forms</Text>
                </View>

                <View style={styles.container}>
                <View style={styles.inner}>
                    <Text>Timetable</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text>Profile</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text>Settings</Text>
                </View>
            </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box:{
        width: '50%',
        height: '50%',
        padding: 5,
    },
    inner: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    }

})