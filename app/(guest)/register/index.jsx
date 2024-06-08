import { View, Text, StyleSheet, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link, Redirect, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar'
import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import CrossView from '../../reusables/CrossView'
import useTheme from '../../hooks/useTheme'
import CustomTextInput from '../../reusables/form/CustomTextInput';
import GlobalStyle from '../../styles/GlobalStyle';
import { Image } from 'expo-image';
import Translate from '../../reusables/Translate';
import Logo from '../../reusables/Logo';
import { Api } from '../../components/network/api';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from "react-native";
import { AllContext } from '../../components/contexts/AllPurposeContext';
import customFetch from '../../components/request/customFetch';

export default function Register() {
    const { authUser, langCode, setlanguage, clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);

    const [error, seterror] = useState({
        bvn: "", transactionPin: "", name: false, phoneNumber: false, email: false, address: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        bvn: "", transactionPin: "", name: '', phoneNumber: '', email: '', address: '', pin: ''
    })

    const [form, setform] = useState({
        bvn: "", transactionPin: "", name: '', phoneNumber: '', email: '', address: '', pin: ''
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
                bvn: form.bvn,
                name: form.name,
                address: form.address,
                email: form.email.toLowerCase(),
                phoneNumber: form.phoneNumber,
                pin: form.pin,
                transactionPin: form.transactionPin,
                device_name: deviceName ? deviceName : "web",
            };
            const { serverHost } = Api();
            var options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params),
            }
            const response = await fetch(`${serverHost}/api/register`, options);

            if (response.ok) {
                let result = await response.text();

                if (Platform.OS === 'web') {
                    // await AsyncStorage.setItem('sub-faster-token', result);
                    await AsyncStorage.setItem('sub-faster-registered', true);
                } else {
                    // SecureStore.setItemAsync('sub-faster-token', result);
                    SecureStore.setItemAsync('sub-faster-registered', true);
                }

                router.push('/login');
            } else {
                seterrorMsg('Something went wrong. Please try again.')
            }
            setregistering(false)
        } else {
            seterrorMsg('Some fields are still empty!')
        }
    }
    if (authUser?.hasOwnProperty('id')) {
        return <Redirect href="/" />;
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardavoidingview}
        >
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
                <ScrollView
                    style={[styles.container]}
                >
                    <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 8 }}>
                        <Text style={{ color: theme.color }}>Already have an account?</Text>
                        <Link href={'/login'} style={{ color: theme.linkColor }}>Login</Link>
                    </View>

                    <View style={[styles.form, GlobalStyle.shadow, { width: '80%', backgroundColor: theme.cardBgc }]}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.hearder, { color: theme.color }]}>Personal Data</Text>
                        </View>
                        <Text style={{ fontSize: 11 }}> CBN: No new account/wallet shall be allowed to operate without BVN, however, any
                            account/wallet without BVN shall be closed.</Text>
                        <Text style={{ fontSize: 11 }}>As a rresult of the above regulation, your BVN is required to generate a reserved account for your subFaster wallet.</Text>
                        <CustomTextInput
                            label={Translate("BVN", langCode)}
                            value={form['bvn']}
                            error={error['bvn']}
                            errorMsg={errorMsg['bvn']}
                            name={"bvn"}
                            inputMode={"numeric"}
                            maxLength={11}
                            handleInputChange={handleInput}
                            iconLeft={<MaterialCommunityIcons name={"security"} size={24} color={theme.grayed} />}
                        />
                        <CustomTextInput
                            label={Translate("Full Name", langCode)}
                            value={form['name']}
                            error={error['name']}
                            errorMsg={errorMsg['name']}
                            name={"name"}
                            inputMode={"text"}
                            handleInputChange={handleInput}
                            iconLeft={<FontAwesome5 name={"user-alt"} size={24} color={theme.grayed} />}
                        />
                        <CustomTextInput
                            label={Translate("phone Number", langCode)}
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
                            label={Translate("e-mail", langCode)}
                            value={form['email']}
                            error={error['email']}
                            errorMsg={errorMsg['email']}
                            name={"email"}
                            inputMode={"email"}
                            handleInputChange={handleInput}
                            iconLeft={<Entypo name={"email"} size={24} color={theme.grayed} />}
                        />
                        <CustomTextInput
                            label={Translate("Address", langCode)}
                            value={form['address']}
                            error={error['address']}
                            errorMsg={errorMsg['address']}
                            name={"address"}
                            multiline
                            inputMode={"text"}
                            // multiline={true}
                            handleInputChange={handleInput}
                            iconLeft={<Entypo name={"address"} size={24} color={theme.grayed} />}
                        />
                        <CustomTextInput
                            label={Translate("password", langCode)}
                            value={form['pin']}
                            error={error['pin']}
                            errorMsg={errorMsg['pin']}
                            name={"pin"}
                            inputMode={"numeric"}
                            handleInputChange={handleInput}
                            maxLength={6}
                            width={150}
                            placeholder={"Set a 6-digit pin"}
                            iconLeft={<FontAwesome5 name={"lock"} size={24} color={theme.grayed} />}
                        />
                        <CustomTextInput
                            label={Translate("transaction pin", langCode)}
                            value={form['transactionPin']}
                            error={error['transactionPin']}
                            errorMsg={errorMsg['transactionPin']}
                            name={"transactionPin"}
                            inputMode={"numeric"}
                            handleInputChange={handleInput}
                            maxLength={4}
                            width={150}
                            placeholder={"Set a 4-digit pin"}
                            iconLeft={<FontAwesome5 name={"key"} size={24} color={theme.grayed} />}
                        />
                        <View style={{ marginBottom: 10 }}>
                            <Pressable
                                onPress={submitPin}
                                style={{
                                    alignSelf: 'flex-end',
                                    backgroundColor: theme.iconColor,
                                    minWidth: 100, borderRadius: 15,
                                    marginTop: 20,
                                    paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center',
                                }}
                            >
                                {registering ?
                                    <Text style={{ color: 'white' }}>{`${Translate("please", langCode)} ${Translate("wait", langCode)}...`}</Text>
                                    :
                                    <Text style={{ color: 'white' }}>{Translate("register", langCode)}</Text>
                                }
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </CrossView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    keyboardavoidingview: {
        flex: 1,
    },
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