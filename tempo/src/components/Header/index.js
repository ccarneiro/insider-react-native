import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <LinearGradient
            style={styles.header}
            colors={['#1ed6ff', '#97c1ff']}
        >
            <Text style={styles.date}>11/03/2021</Text>
            <Text style={styles.city}>Campos dos Goytacazes</Text>
            <Ionicons 
                name='cloud'
                color='#fff'
                size={150}
            />
            <View style={styles.tempContainer}>
            <Text style={styles.temp}>30</Text>
            <Text style={styles.tempUnit}>℃</Text>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '95%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    date: {
        color: '#FFF',
        fontSize: 17,
    },
    city: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    tempContainer: {
        flexDirection: 'row'
    },
    temp: {
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold'
    },
    tempUnit: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    },
});
