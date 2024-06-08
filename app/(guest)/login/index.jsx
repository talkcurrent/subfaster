import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Link, Redirect, Stack, useRouter } from 'expo-router';
import axios from 'axios';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from "react-native";
import useTheme from '../../hooks/useTheme';
import { Api } from '../../components/network/api';
import CrossView from '../../reusables/CrossView';
import Logo from '../../reusables/Logo';
import CustomTextInput from '../../reusables/form/CustomTextInput';
import GlobalStyle from '../../styles/GlobalStyle';
import Translate from '../../reusables/Translate';
import { AllContext } from '../../components/contexts/AllPurposeContext';
import { FontAwesome5 } from '@expo/vector-icons';
import customFetch from '../../components/request/customFetch';
import { Image } from 'expo-image';

export default function Login() {
    const router = useRouter();
    const {
        langCode, clientSettings, authUser, setauthUser,
        setUnAuthorized
    } = useContext(AllContext);
    const theme = useTheme(clientSettings['nightMode']);

    const [form, setform] = useState({
        password: "", phoneNumber: "",
        // email: "", remember: false
    });
    const [proccessing, setproccessing] = useState(false)
    const [errorMsg, seterrorMsg] = useState('')

    const handleInputChange = (value, key) => {
        setform(prev => {
            return { ...prev, [key]: value };
        });
    };

    const handleLogin = async () => {
        const { serverHost, clientHost } = Api();
        const error = Object.values(form).some(o => {
            return (o.length ? o.trim() : o) == ""
        });

        seterrorMsg('')
        if (!error) {
            setproccessing(true)
            const deviceName = Device.deviceName ? Device.deviceName : Device.osName;
            let body = {
                phoneNumber: form.phoneNumber,
                password: form.password,
                device_name: deviceName
            }
            var options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
            }
            const response = await fetch(`${serverHost}/api/login`, options);
            if (response.ok) {
                const { token, user } = await response.json();
                setUnAuthorized(false)
                setauthUser(user)
                let prevScreen;
                if (Platform.OS === 'web') {
                    await AsyncStorage.setItem('sub-faster-token', token);
                    prevScreen = await AsyncStorage.getItem('sub-faster-prevPath');
                } else {
                    await SecureStore.setItemAsync('sub-faster-token', token);
                    prevScreen = await SecureStore.getItemAsync('sub-faster-prevPath');
                }

                if (prevScreen?.length) {
                    router.replace(prevScreen);
                } else {
                    router.replace(`/`);
                }
                // if (Platform.OS === 'web') {
                //     await AsyncStorage.removeItem('sub-faster-prevPath');
                // } else {
                //     await SecureStore.deleteItemAsync('sub-faster-prevPath');
                // }
            } else {
                const result = await response.json();
                seterrorMsg(result.message);
            }

            setproccessing(false);
        }
    }

    if (authUser?.hasOwnProperty('id')) {
        return <Redirect href="/" />;
    }

    return (
        <CrossView>
            <StatusBar
                animated={true}
                backgroundColor={"transparent"}
                style={theme.statusBarTextColor}
            />
            <Stack.Screen options={{
                headerShown: false,
            }} />
            <View style={{ alignItems: 'center', paddingVertical: 40 }}>
                <Image
                    style={{ height: 50, width: 100 }}
                    source={require("../../../assets/images/loader.png")}
                    contentFit="contain"
                // blurRadius={1.2}
                />
            </View>
            <ScrollView >
                <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 8 }}>
                    <Text style={{ color: theme.color }}>Don't have an account yet?</Text>
                    <Link href={'/register'} style={{ color: theme.linkColor }}>Register</Link>
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { width: '80%', backgroundColor: theme.cardBgc }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.hearder, { color: theme.color }]}>Login</Text>
                    </View>
                    <CustomTextInput
                        style={styles.input}
                        value={form['phoneNumber']}
                        label={Translate("phone number", langCode)}
                        name='phoneNumber'
                        inputMode={"tel"}
                        handleInputChange={handleInputChange}
                        placeholder="E.g 09066000000"
                        maxLength={11}
                        iconLeft={
                            <FontAwesome5 name={"phone"} size={24} color={theme.grayed} />
                        }
                    />
                    <CustomTextInput
                        style={styles.input}
                        label={Translate("password", langCode)}
                        name='password'
                        value={form['password']}
                        inputMode={"numeric"}
                        maxLength={6}
                        placeholder="Your 6 digit pin"
                        secureTextEntry={true}
                        handleInputChange={handleInputChange}
                        iconLeft={<FontAwesome5 name={"key"} size={24} color={theme.grayed} />}
                    />
                    {errorMsg.length ?
                        <View>
                            <Text style={{ color: theme.error }}>{errorMsg}</Text>
                        </View>
                        : <></>}
                    <View style={[GlobalStyle.btnGrid, { justifyContent: "space-between", alignItems: "center" }]}>
                        <View>
                        </View>
                        <Pressable style={[GlobalStyle.btn]} >
                            <Pressable style={{ backgroundColor: theme.iconColor, borderRadius: 10 }}>
                                <Text
                                    onPress={proccessing ? () => { } : handleLogin}
                                    style={[GlobalStyle.btnPrimary.text, { minWidth: 100, textAlign: "center" }]}
                                >{proccessing ? `${Translate("please", langCode)} ${Translate("wait", langCode)}...` : Translate("login", langCode)}</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10 }}>
                        <Text
                            style={{ fontSize: 14, color: theme.color }}
                        >
                            {Translate("forgot password", langCode)}? <Link href={"/guest/ResetPin"} style={{ color: theme.linkColor }}>{Translate("get new password", langCode)}</Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </CrossView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    hearder: {
        fontSize: 25,
        fontWeight: '700'
    },
    form: {
        minHeight: 200,
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 5,
        alignSelf: 'center',
    },
});