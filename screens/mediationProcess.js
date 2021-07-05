import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/header';
import AppBarComponent from '../components/appBar';

const stagesContent = [
    " ",
]

export default function MediationProcess() {

    const [showText, setShowText] = React.useState(false);
    const [showStageOneText, setShowStageOneText] = React.useState(true);
    const [showStageTwoText, setShowStageTwoText] = React.useState(true);
    const [showStageThreeText, setShowStageThreeText] = React.useState(true);
    const [showStageFourText, setShowStageFourText] = React.useState(true);
    const [showStageFiveText, setShowStageFiveText] = React.useState(true);

    const toggleText = () => setShowText(showText => !showText);
    const toggleStageOneText = () => setShowStageOneText(setShowStageOneText => !setShowStageOneText);
    const toggleStageTwoText = () => setShowStageTwoText(setShowStageTwoText => !setShowStageTwoText);
    const toggleStageThreeText = () => setShowStageThreeText(setShowStageThreeText => !setShowStageThreeText);
    const toggleStageFourText = () => setShowStageFourText(setShowStageFourText => !setShowStageFourText);
    const toggleStageFiveText = () => setShowStageFiveText(setShowStageFiveText => !setShowStageFiveText);

    return (
        <ScrollView stickyHeaderIndices={[0]}>
        <Header/>
            <Text style={styles.titleText} color="#056965">The Mediation Process</Text>
            <Text style={styles.subheadingText} color="#056965">Need some help? You came to the right place for a quick catch-up!</Text>
            <Text style={styles.stagesText} color="#056965">THE PRIMARY MEDIATION PROCESS IN BRIEF</Text>
            <Text onPress={toggleStageOneText} style={styles.stagesText} color="#056965">STAGE ONE: Introduction & Rules</Text>
            {
                stagesContent.map((text, index) =>
                    <Text style={styles.stageContentText}key={index}>
                        {showStageOneText ? text : "1) Introduce yourselves.\n2) Ask if they agree to mediation - move to a quiet area.\n3) Get agreement to the five rules of mediation:"}
                    </Text>
                )
            }
            <Text onPress={toggleStageTwoText} style={styles.stagesText} color="#056965">STAGE TWO: Defining the Problem</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageTwoText ? text : "1) Who will talk first? Value the person going second.\n2) Ask Person (A) what happened? Repeat back facts and ask how they feel. How are you feeling about this? Repeat feelings.\n3) Ask Person (A) what happened? Repeat back facts and ask how they feel. How are you feeling about this? Repeat feelings.\n4) Ask (A) and (B): \"Do you have anything else to add about what happened?\"\n5) Repeat back facts & repeat this question until they have nothing more to add."}
                    </Text>
                )
            }
            <Text onPress={toggleStageThreeText} style={styles.stagesText} color="#056965">STAGE THREE: Summarise With One Sentence</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageThreeText ? text : "1) My understanding is that the problem is ..., is that correct?\n2) Persons (A) and (B) need to both agree. There can be more than one problem.\n"}
                    </Text>
                )
            }
            <Text onPress={toggleStageFourText} style={styles.stagesText} color="#056965">STAGE FOUR: Generating Solutions</Text>
            {
                stagesContent.map((text, index) =>
                <Text style={styles.stageContentText}key={index}>
                        {showStageFourText ? text : "1) Ask Person (B) and then Person (A): What can you do...\n2) Ask Person (A) to comment on Person (B)\'s idea:\n"}
                    </Text>
                )
            }
            <Text onPress={toggleStageFiveText} style={styles.stagesText} color="#056965">STAGE FIVE: Reaching Agreement and Closure</Text>
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