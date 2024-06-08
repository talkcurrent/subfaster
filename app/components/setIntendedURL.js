import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';


const setIntendedURL = async (prevPath) => {
    if (Platform.OS === 'web') {
        await AsyncStorage.setItem('sub-faster-prevPath', prevPath);
    } else {
        SecureStore.setItemAsync('sub-faster-prevPath', prevPath);
    }
    return
}

export default setIntendedURL