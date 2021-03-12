import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Conditions() {
    return (
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather name='wind' size={23} color='#1ed6ff' />
                <Text>7 km/h</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff' />
                <Text>5:22 am</Text>
            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff' />
                <Text>6:00 pm</Text>
            </View>

            <View style={styles.condition}>
                <Feather name='droplet' size={23} color='#1ed6ff' />
                <Text>65</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '95%',
        marginTop: 15,
        padding: 10,
        backgroundColor: '#FFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    condition: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
