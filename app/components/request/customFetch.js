import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';

const customFetch = async (url, method, body) => {
    let token;
    if (Platform.OS === 'web') {
        token = await AsyncStorage.getItem('sub-faster-token');
    } else {
        token = await SecureStore.getItemAsync('sub-faster-token')
    }

    let response = await fetch(url,
        {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: `Bearer ${token}`
            },
            body: body
        }
    );

    return response
}

export default customFetch