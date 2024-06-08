import { View, Text, Platform } from 'react-native'
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

const token = async () => {
    var token;
    if (Platform.OS === 'web') {
        token = await AsyncStorage.getItem('sub-faster-token');
    } else {
        token = await SecureStore.getItemAsync('sub-faster-token');
    }
    return token;
}

export default token