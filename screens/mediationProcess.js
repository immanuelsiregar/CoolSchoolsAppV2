import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/header';
import { Appbar } from 'react-native-paper';

const stagesContent = [
    " ",
]

export default function MediationProcess() {

    const [showText, setShowText] = React.useState(false);
    const [showStageOneText, setShowStageOneText] = React.useState(false);
    const [showStageTwoText, setShowStageTwoText] = React.useState(false);
    const [showStageThreeText, setShowStageThreeText] = React.useState(false);
    const [showStageFourText, setShowStageFourText] = React.useState(false);
    const [showStageFiveText, setShowStageFiveText] = React.useState(false);

    const toggleText = () => setShowText(showText => !showText);
    const toggleStageOneText = () => setShowStageOneText(setShowStageOneText => !setShowStageOneText);
    const toggleStageTwoText = () => setShowStageTwoText(setShowStageTwoText => !setShowStageTwoText);
    const toggleStageThreeText = () => setShowStageThreeText(setShowStageThreeText => !setShowStageThreeText);
    const toggleStageFourText = () => setShowStageFourText(setShowStageFourText => !setShowStageFourText);
    const toggleStageFiveText = () => setShowStageFiveText(setShowStageFiveText => !setShowStageFiveText);

    return (
        <ScrollView>
            <Header/>
            <Text style={styles.titleText} color="#056965">The Mediation Process</Text>
            <Text style={styles.subheadingText} color="#056965">Need some help? You came to the right place for a quick catch-up!</Text>
            <Text style={styles.stagesText} color="#056965">THE PRIMARY MEDIATION PROCESS IN BRIEF</Text>
            <Text onPress={toggleStageOneText} style={styles.stagesText} color="#056965">STAGE ONE</Text>
            {
                stagesContent.map((text, index) =>
                    <Text style={styles.stageContentText}key={index}>
                        {showStageOneText ? text : "Stage One Content"}
                    </Text>
                )
            }
            <Text onPress={toggleStageTwoText} style={styles.stagesText} color="#056965">STAGE TWO</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageTwoText ? text : "Stage Two Content"}
                    </Text>
                )
            }
            <Text onPress={toggleStageThreeText} style={styles.stagesText} color="#056965">STAGE THREE</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageThreeText ? text : "Stage Three Content"}
                    </Text>
                )
            }
            <Text onPress={toggleStageFourText} style={styles.stagesText} color="#056965">STAGE FOUR</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageFourText ? text : "Stage Four Content"}
                    </Text>
                )
            }
            <Text onPress={toggleStageFiveText} style={styles.stagesText} color="#056965">STAGE FIVE</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageFiveText ? text : "Stage Five Content"}
                    </Text>
                )
            }


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontSize: 30,
        fontWeight: '600',
        paddingTop: 40,
        textAlign: 'center',
        color: '#056965',
    },
    subheadingText:{
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 40,
        textAlign: 'center',
        color: '#056965',
    },
    stagesText:{
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 40,
        textAlign: 'center',
        color: '#056965',
    },
    stageContentText:{
        fontSize: 20, 
        fontWeight: '500',
        paddingTop: 10,
    }
})