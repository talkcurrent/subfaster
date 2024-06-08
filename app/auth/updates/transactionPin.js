import { View, Text, StyleSheet, Pressable, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { Link, Stack, router } from 'expo-router';
import CrossView from '../../reusables/CrossView'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import useTheme from '../../hooks/useTheme'
import CustomTextInput from '../../reusables/form/CustomTextInput';
import GlobalStyle from '../../styles/GlobalStyle';
import { AllContext } from '../../components/contexts/AllPurposeContext';

export default function TransactionPin() {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    const isPresented = router.canGoBack();

    const [error, seterror] = useState({
        oldPin: false, newPin: false, confirmNewPin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        oldPin: '', newPin: '', confirmNewPin: ''
    })

    const [form, setform] = useState({
        oldPin: '', newPin: '', confirmNewPin: ''
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
                if (value == "" || value.length < 4) {
                    seterror(prev => {
                        return { ...prev, [key]: true };
                    });
                    error = true
                }
                if (key == 'confirmNewPin') {
                    if (form[key] != form['newPin']) {
                        seterrorMsg(prev => {
                            return { ...prev, [key]: "Password mismatch" };
                        });
                        error = true
                    }
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
                    <FontAwesome5 name={'key'} size={50} color={theme.iconColor} />
                    <Text style={{ fontFamily: 'serif-bold', color: theme.color }}>Reset Your Transaction PIN</Text>
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <CustomTextInput
                        label={"Old PIN"}
                        value={form['oldPin']}
                        error={error['oldPin']}
                        errorMsg={errorMsg['oldPin']}
                        width={150}
                        name={"oldPin"}
                        secureTextEntry={true}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
                    />
                    <CustomTextInput
                        label={"New PIN"}
                        value={form['newPin']}
                        error={error['newPin']}
                        errorMsg={errorMsg['newPin']}
                        width={150}
                        name={"newPin"}
                        secureTextEntry={true}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
                    />
                    <CustomTextInput
                        label={"Confirm New PIN"}
                        value={form['confirmNewPin']}
                        error={error['confirmNewPin']}
                        errorMsg={errorMsg['confirmNewPin']}
                        width={150}
                        name={"confirmNewPin"}
                        secureTextEntry={true}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
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
                            <Text style={{ color: 'white' }}>{'Reset Transaction PIN'}</Text>
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
})