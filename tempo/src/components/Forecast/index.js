import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { condition } from '../../utils/condition';


export default function Forecast({ data }) {
    const icon = condition(data.condition);
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name={icon.name} size={25} color={icon.color} />
            <View>
                <Text>{data.min}°</Text>
                <Text style={styles.tempMax}>{data.max}°</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginLeft: 12,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    date: {
        fontSize: 16,
    },
    tempMax: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
