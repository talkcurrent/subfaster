"use client";

import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { Api } from "../network/api";
import axios from "axios";
import { useRouter } from "expo-router";
import token from '../token';
import setIntendedURL from '../setIntendedURL';
import { useRouteInfo } from "expo-router/build/hooks";

export const AllContext = React.createContext();

export const AllProvider = (props) => {
    const { serverHost, clientHost } = Api();
    const router = useRouter();

    const [clientSettings, setclientSettings] = useState({
        nightMode: false
    })
    const [authUser, setauthUser] = useState(null)
    const [unAuthorized, setUnAuthorized] = useState(false)
    const [networkIssues, setnetworkIssues] = useState(false)

    const [gettingAuthUser, setgettingAuthUser] = useState(false)

    const [language, setlanguage] = useState(null)
    const [langCode, setlangCode] = useState(null)
    const [networks, setnetworks] = useState({
        mtn: { plans: [] },
        glo: { plans: [] },
        airtel: { plans: [] },
        '9mobile': { plans: [] },
        gotv: { plans: [] },
        dstv: { plans: [] },
        startimes: { plans: [] },
    })
    const [gettingPlans, setgettingPlans] = useState(false)


    useEffect(() => {
        putLangToStorage();
    }, [language])

    useEffect(() => {
        getauthUser();
        getLangFromStorage();
        getClientSettings();
    }, [])

    const getauthUser = async (requestURL) => {
        // await csrf();
        var token;
        if (Platform.OS === 'web') {
            token = await AsyncStorage.getItem('sub-faster-token');
        } else {
            token = await SecureStore.getItemAsync('sub-faster-token');
        }

        var options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
                'X-Custom-Header': 'header value'
            }
        }
        if (!gettingAuthUser) {
            setgettingAuthUser(true)
            const response = await fetch(`${serverHost}/api/user`, options);
            if (response.ok) {
                let result = await response.json();
                setauthUser(result)
            }
            if (response.status == 401 || response.statusText == 'Unauthorized') {

                setUnAuthorized(true)
                setauthUser(null)
            } else {
                setUnAuthorized(false)
            }
            if (response.status == 502 || response.status == 503) {
                setnetworkIssues(true)
            } else {
                setnetworkIssues(false)
            }

            setgettingAuthUser(false)
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
    const getClientSettings = async () => {
        // AsyncStorage doesn't work well with physical ios device
        if (Platform.OS === 'web') {
            const settings = await AsyncStorage.getItem('sub-faster-settings');
            if (settings) {
                setclientSettings(JSON.parse(settings))
            }
        } else {
            SecureStore.getItemAsync('sub-faster-settings').then(settings => {
                if (settings) {
                    setclientSettings(JSON.parse(settings))
                }
            });
        }
    }

    const putClientSettings = async (key, value) => {
        if (Platform.OS === 'web') {
            var settings = await AsyncStorage.getItem('sub-faster-settings');
            let s = JSON.parse(settings);
            if (!s) {
                let latestSettings = {
                    [key]: value
                }
                await AsyncStorage.setItem('sub-faster-settings', JSON.stringify(latestSettings))
                    .then(() => {
                        setclientSettings(prev => {
                            return { ...prev, [key]: value }
                        })
                    });
            } else {
                const newSettings = { ...s, [key]: value }
                await AsyncStorage.setItem('sub-faster-settings', JSON.stringify(newSettings))
                    .then(() => {
                        setclientSettings(prev => {
                            return { ...prev, [key]: value }
                        })
                    });
            }
        } else {
            SecureStore.getItemAsync('sub-faster-settings').then(userSettings => {
                let s = JSON.parse(userSettings);
                if (s == null) {
                    let onlySettings = {
                        [key]: value
                    }
                    SecureStore.setItemAsync('sub-faster-settings', JSON.stringify(onlySettings))
                        .then(() => {
                            setclientSettings(prev => {
                                return { ...prev, [key]: value }
                            })
                        });

                } else {
                    // modify or set new 
                    const newSettings = { ...s, [key]: value }
                    SecureStore.setItemAsync('sub-faster-settings', JSON.stringify(newSettings))
                        .then(() => {
                            setclientSettings(prev => {
                                return { ...prev, [key]: value }
                            })
                        });
                }
            });
        }
    }

    const getPlans = async (network) => {
        const { serverHost } = Api();
        const accessToken = await token();

        setgettingPlans(true)

        const body = { network: network.toUpperCase() }

        var options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`,
                'X-Custom-Header': 'header value',
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(body)
        }

        const response = await fetch(`${serverHost}/api/get_plans`, options);
        if (response.ok) {
            let result = await response.json()
            if (result.length) {
                setnetworks((prev) => {
                    return { ...prev, [network]: { plans: result } }
                })
            }
        }

        if (response.status == 401 || response.statusText == 'Unauthorized') {
            setUnAuthorized(true)
        } else {
            setUnAuthorized(false)
        }
        if (response.status == 502 || response.status == 503) {
            setnetworkIssues(true)
        } else {
            setnetworkIssues(false)
        }

        setgettingPlans(false)
    }

    return (
        <AllContext.Provider
            value={{
                language, setlanguage, langCode, putLangToStorage, getLangFromStorage,
                putClientSettings, clientSettings, setclientSettings,
                gettingAuthUser, unAuthorized, setUnAuthorized, setauthUser, authUser, getauthUser, networks, setnetworks,
                networkIssues, setnetworkIssues,
                getPlans, gettingPlans, setgettingPlans
            }}
        >
            {props.children}
        </AllContext.Provider>
    );
};

export default AllProvider;