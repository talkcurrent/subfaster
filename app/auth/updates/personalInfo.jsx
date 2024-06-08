import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link, Stack, router } from 'expo-router';
import CrossView from '../../reusables/CrossView'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import useTheme from '../../hooks/useTheme'
import CustomTextInput from '../../reusables/form/CustomTextInput';
import GlobalStyle from '../../styles/GlobalStyle';
import { Image } from 'expo-image';
import { AllContext } from '../../components/contexts/AllPurposeContext';

export default function PersonalInfo() {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    const isPresented = router.canGoBack();

    const [error, seterror] = useState({
        name: false, phoneNumber: false, email: false, address: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        name: '', phoneNumber: '', email: '', address: '', pin: ''
    })

    const [form, setform] = useState({
        name: 'Enyoojo Akoh', phoneNumber: '', email: '', address: '', pin: ''
    })

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

    const submitPin = () => {
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
            console.info("No single error!")
        }
    }

    return (
        <>
            <CrossView >
                <StatusBar style={Platform.OS === 'ios' && isPresented ? 'light' : theme.statusBarTextColor} />
                {!isPresented && <Link href="/"><Ionicons name="arrow-back" size={30} color={theme.color} /></Link>}
                <View style={{ alignItems: 'center', padding: 30, gap: 10 }}>
                    <Image
                        style={[styles.profile, { borderColor: theme.iconColor }]}
                        source={require(`.../../../../assets/images/profile.png`)}
                        contentFit="cover"
                        transition={10}
                    // blurRadius={6}
                    />
                    <Text style={{ fontFamily: 'serif-bold', color: theme.color }}>Edit Personal Info</Text>
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <CustomTextInput
                        label={"Full Name"}
                        value={form['name']}
                        error={error['name']}
                        errorMsg={errorMsg['name']}
                        name={"name"}
                        inputMode={"text"}
                        handleInputChange={handleInput}
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
                    />
                    <CustomTextInput
                        label={"E-mail"}
                        value={form['email']}
                        error={error['email']}
                        errorMsg={errorMsg['email']}
                        name={"email"}
                        inputMode={"email"}
                        handleInputChange={handleInput}
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
                    />
                    <CustomTextInput
                        label={"Transaction PIN"}
                        value={form['pin']}
                        error={error['pin']}
                        errorMsg={errorMsg['pin']}
                        name={"pin"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
                        width={120}
                        placeholder={"Your 4-digi pin"}
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
                            <Text style={{ color: 'white' }}>{'Update Data'}</Text>
                        </Pressable>
                    </View>
                </View>
            </CrossView>
        </>
    )
}
const styles = StyleSheet.create({
    form: {
        width: '80%',
        minHeight: 200,
        marginTop: 10,
        paddingHorizontal: 60,
        gap: 5,
        alignSelf: 'center',
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 4,
        borderStyle: 'solid',
    },
})