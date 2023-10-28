"use client";

import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Api } from "../network/api";
import axios from "axios";
import customFetch from "../request/customFetch";
import { useRouter } from "expo-router";
import UnAuthorized from "../../reusables/UnAuthorized";

export const AllContext = React.createContext();

export const AllProvider = (props) => {
    const { serverHost, clientHost } = Api();
    const router = useRouter();

    const [authUser, setauthUser] = useState(null)

    const [language, setlanguage] = useState(null)
    const [langCode, setlangCode] = useState(null)

    useEffect(() => {
        putLangToStorage();
    }, [language])

    useEffect(() => {
        getLangFromStorage();
    }, [])

    const getauthUser = async (requestURL) => {
        const response = await customFetch(
            `${serverHost}/api/user`,
            'POST',
            '',
        )
        if (response.ok) {
            let result = await response.json();
            setauthUser(result)
            if (Platform.OS === 'web') {
                await AsyncStorage.removeItem('sub-faster-prevPath');
            } else {
                await SecureStore.deleteItemAsync('sub-faster-prevPath');
            }
        } else {
            UnAuthorized(router, requestURL, `${clientHost}/guest/Login`)
        }
    }

    const putLangToStorage = async () => {
        const lan = language == "English" ? 'en' :
            language == "Arabic" ? 'ar' :
                language == "French" ? 'fa' :
                    language == "Hausa" ? 'ha' :
                        language == "Igbo" ? 'ig' : 'yo';
        try {
            // AsyncStorage doesn't work well with physical ios device
            if (Platform.OS === 'web') {
                const lang = await AsyncStorage.getItem('sub-faster-language');
                if (lang != lan) {
                    await AsyncStorage.setItem('sub-faster-language', lan).then(() => setlangCode(lan));
                }
            } else {
                SecureStore.getItemAsync('sub-faster-language').then(lang => {
                    if (lang != lan) {
                        SecureStore.setItemAsync('sub-faster-language', lan).then(() => setlangCode(lan));
                    }
                });
            }
        } catch (e) {
            // saving error
        }
    }
    const getLangFromStorage = async () => {
        // AsyncStorage doesn't work well with physical ios device
        if (Platform.OS === 'web') {
            const lang = await AsyncStorage.getItem('sub-faster-language');
            if (lang !== null) {
                const lan = lang == "yo" ? 'Yoruba' :
                    lang == "ar" ? 'Arabic' :
                        lang == "fa" ? 'French' :
                            lang == "ha" ? 'Hausa' :
                                lang == "ig" ? 'Igbo' : 'English';

                setlanguage(lan);
                setlangCode(lang);
            } else {
                setlanguage("English");
                setlangCode("en");
            }
        } else {
            SecureStore.getItemAsync('sub-faster-language').then(lang => {
                if (lang !== null) {
                    const lan = lang == "yo" ? 'Yoruba' :
                        lang == "ar" ? 'Arabic' :
                            lang == "fa" ? 'French' :
                                lang == "ha" ? 'Hausa' :
                                    lang == "ig" ? 'Igbo' : 'English';

                    setlanguage(lan);
                    setlangCode(lang);
                } else {
                    setlanguage("English");
                    setlangCode("en");
                }
            });
        }
    }



    return (
        <AllContext.Provider
            value={{
                language, setlanguage, langCode, putLangToStorage, getLangFromStorage,
                authUser, getauthUser,
            }}
        >
            {props.children}
        </AllContext.Provider>
    );
};

export default AllProvider;