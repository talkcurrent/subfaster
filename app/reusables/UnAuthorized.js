import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Redirect, useRouter } from 'expo-router';

const UnAuthorized = async (router, prevPath, currentPath) => {
    if (Platform.OS === 'web') {
        await AsyncStorage.setItem('prevPath', prevPath);
    } else {
        SecureStore.setItemAsync('prevPath', prevPath);
    }
    //use push to enable previous screen be path of history
    //This will lead user back to previous screen once login is successful
    router.push(currentPath)
    // return <Redirect href={currentPath} />;
}

export default UnAuthorized