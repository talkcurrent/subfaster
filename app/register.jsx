import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { Entypo, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import CrossView from './reusables/CrossView'
import useTheme from './hooks/useTheme'
import CustomTextInput from './reusables/form/CustomTextInput';
import GlobalStyle from './styles/GlobalStyle';
import { Image } from 'expo-image';
import Translate from './reusables/Translate';
import Logo from './reusables/Logo';
import { Api } from './components/network/api';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from "react-native";
import { AllContext } from './components/contexts/AllPurposeContext';
import customFetch from './components/request/customFetch';

export default function Register() {
    const theme = useTheme();
    const { language, langCode, setlanguage } = useContext(AllContext)

    const [error, seterror] = useState({
        name: false, phoneNumber: false, email: false, address: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        name: '', phoneNumber: '', email: '', address: '', pin: ''
    })

    const [form, setform] = useState({
        name: '', phoneNumber: '', email: '', address: '', pin: ''
    })
    const [registering, setregistering] = useState(false)

    const handleInput = (val, name) => {
        setform(prev => {
            return { ...prev, [name]: val };
        });
        seterror(prev => {
            return { ...prev, [name]: false };
        });
        seterrorMsg(prev => {
            return { ...prev, [name]: '' };
        });
    }

    const submitPin = async () => {
        let error = false
        for (const key in form) {
            if (Object.hasOwnProperty.call(form, key)) {
                const value = form[key].length ? form[key].trim() : form[key];
                if (value == "") {
                    seterror(prev => {
                        return { ...prev, [key]: true };
                    });
                    error = true
                }
            }
        }

        if (!error) {
            setregistering(true)
            seterrorMsg("")
            const deviceName = Device.deviceName;

            const params = {
                name: form.name,
                address: form.address,
                email: form.email.toLowerCase(),
                phoneNumber: form.phoneNumber,
                pin: form.pin,
                device_name: deviceName ? deviceName : "web",
            };
            // const { serverHost } = Api();
            // const response = await customFetch(
            //     `${serverHost}/api/register`,
            //     'POST',
            //     JSON.stringify(params),
            // )
            // if (response.ok) {
            //     let result = await response.text();

            //     if (Platform.OS === 'web') {
            //         await AsyncStorage.setItem('sub-faster-token', result);
            //     } else {
            //         SecureStore.setItemAsync('sub-faster-token', result);
            //     }
            router.replace('/login');
            //     } else {
            //         seterrorMsg('Something went wrong. Please try again.')
            //     }
            //     setregistering(false)
            // } else {
            //     seterrorMsg('Some fields are still empty!')
        }
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
            <ScrollView
                style={[styles.container]}
            >
                <Logo fontSize={40} />
                <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 8 }}>
                    <Text style={{ color: theme.color }}>Already have an account?</Text>
                    <Link href={'/login'} style={{ color: theme.linkColor }}>Login</Link>
                </View>

                <View style={[styles.form, GlobalStyle.shadow, { width: '80%', backgroundColor: theme.cardBgc }]}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.hearder, { color: theme.color }]}>Personal Data</Text>
                    </View>
                    <CustomTextInput
                        label={"Full Name"}
                        value={form['name']}
                        error={error['name']}
                        errorMsg={errorMsg['name']}
                        name={"name"}
                        inputMode={"text"}
                        handleInputChange={handleInput}
                        iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        label={"Phone Number"}
                        value={form['phoneNumber']}
                        error={error['phoneNumber']}
                        errorMsg={errorMsg['phoneNumber']}
                        name={"phoneNumber"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={11}
                        iconLeft={<FontAwesome5 name={"phone"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        label={"E-mail"}
                        value={form['email']}
                        error={error['email']}
                        errorMsg={errorMsg['email']}
                        name={"email"}
                        inputMode={"email"}
                        handleInputChange={handleInput}
                        iconLeft={<Entypo name={"email"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        label={"Address"}
                        value={form['address']}
                        error={error['address']}
                        errorMsg={errorMsg['address']}
                        name={"address"}
                        inputMode={"text"}
                        // multiline={true}
                        handleInputChange={handleInput}
                        iconLeft={<Entypo name={"address"} size={24} color={theme.grayed} />}
                    />
                    <CustomTextInput
                        label={"Login PIN"}
                        value={form['pin']}
                        error={error['pin']}
                        errorMsg={errorMsg['pin']}
                        name={"pin"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={6}
                        width={150}
                        placeholder={"Set a 6-digit pin"}
                        iconLeft={<FontAwesome5 name={"key"} size={24} color={theme.grayed} />}
                    />
                    <View style={{ marginBottom: 10 }}>
                        <TouchableOpacity
                            onPress={submitPin}
                            style={{
                                alignSelf: 'flex-end',
                                backgroundColor: theme.iconColor,
                                minWidth: 100, borderRadius: 15,
                                marginTop: 20,
                                paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center',
                            }}
                        >{registering ?
                            <Text style={{ color: 'white' }}>{`${Translate("please", langCode)} ${Translate("wait", langCode)}...`}</Text>
                            :
                            <Text style={{ color: 'white' }}>{Translate("register", langCode)}</Text>
                            }
                        </TouchableOpacity>
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
        paddingTop: 20,
        gap: 5,
        alignSelf: 'center',
    },
});