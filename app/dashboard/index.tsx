import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to homepage!</Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,              // fill the whole screen
        justifyContent: 'center', // center vertically
        alignItems: 'center',     // center horizontally
        backgroundColor: '#fff',  // white background
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});
