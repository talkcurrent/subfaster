import React, { useContext } from 'react';
import { Link, Redirect, Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native';
import CrossView from '../reusables/CrossView';
import Home from '../components/Home';
import Loader from '../components/Loader';
import { AllContext } from '../components/contexts/AllPurposeContext';
import useTheme from '../hooks/useTheme';

const Index = () => {
    const { gettingAuthUser, authUser, langCode, clientSettings, } = useContext(AllContext);
    const theme = useTheme(clientSettings['nightMode'])

    return (
        langCode ?
            <CrossView>
                <StatusBar
                    animated={true}
                    backgroundColor={"transparent"}
                    style={theme.statusBarTextColor}
                />
                <Stack.Screen options={{
                    headerShown: false,
                }} />
                {authUser ?
                    <Home />
                    : gettingAuthUser ?
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            {/* <ActivityIndicator size="large" color={theme.iconColor} /> */}
                            <Loader />
                        </View>
                        :
                        <Redirect href="/login" />
                }
            </CrossView>
            :
            <></>
    );
};

export default Index;
