import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import CrossView from './reusables/CrossView';
import Carousel from './reusables/slider/Carousel';
import { Link, Stack, useRouter } from 'expo-router';
import useTheme from './hooks/useTheme';
import { FontAwesome5 } from '@expo/vector-icons';
import SelectBtn from './reusables/SelectBtn';
import Translate from './reusables/Translate';
import { AllContext } from './components/contexts/AllPurposeContext';
import { Image } from 'expo-image';
import Logo from './reusables/Logo';
import { StatusBar } from 'expo-status-bar'
//device width and height
const { width, height } = Dimensions.get('screen');

const Index = () => {
    const {
        language, langCode, setlanguage
    } = useContext(AllContext);

    const router = useRouter()
    const theme = useTheme()

    const images = [
        { id: 0, image_name: require("../assets/images/carousel/refill.gif"), title: "", description: Translate("sliderTextone", langCode) },
        { id: 1, image_name: require("../assets/images/carousel/languages.gif"), title: "", description: Translate("slidertexttwo", langCode) },
    ];
    return (
        langCode ?
            <CrossView>
                <StatusBar
                    animated={true}
                    backgroundColor={"transparent"}
                    style={theme.statusBarTextColor}
                />
                <View style={styles.scrollView}>
                    <Stack.Screen options={{
                        headerShown: false,
                    }} />
                    <View >
                        <Logo fontSize={40} />
                        <View style={{ justifyContent: "center", minWidth: 100, alignSelf: "flex-end", }}>
                            <SelectBtn
                                value={language}
                                text={language}
                                style={styles.langBtn}
                                handleInputChange={(value) => setlanguage(value)}
                                iconRight={<FontAwesome5 name={"caret-down"} size={14} color={theme.iconColor} />}
                                iconLeft={<FontAwesome5 name={"globe"} size={14} color={theme.iconColor} />}
                                items={['Arabic', 'English', 'French', 'Hausa', 'Igbo', 'Yoruba',]}
                            />
                        </View>
                    </View>

                    <View style={styles.banner}>
                        <Carousel data={images} />
                    </View>

                    <View style={styles.btnGrid}>
                        <Pressable style={styles.btn} >
                            <TouchableOpacity
                                style={[styles.pressable, styles.register, { borderColor: theme.iconColor }]}
                                onPress={() => router.push("/register")}
                            >
                                <Text
                                    style={[styles.registerText, { color: theme.iconColor }]}
                                >{Translate("sign up", langCode)}</Text>
                            </TouchableOpacity>
                        </Pressable>

                        <Pressable style={styles.btn} >
                            <TouchableOpacity
                                onPress={() => router.push('/login')}
                                style={[styles.pressable, styles.login, { backgroundColor: theme.iconColor }]}
                            >
                                <Text style={[styles.loginText, { color: 'white', fontWeight: '600' }]}>{Translate("login", langCode)}</Text>
                            </TouchableOpacity>
                        </Pressable>
                    </View>
                </View>
            </CrossView>
            : ""
    );
};

export default Index;
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    logo: {
        color: "black",
        fontSize: 40,
        fontWeight: '800',
    },
    banner: {
        flexFlow: "column",
        flexGrow: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    btnGrid: {
        flexDirection: "row",
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "center"
    },
    btn: {
        margin: 5,
        flex: 1,
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    pressable: {
        borderRadius: 5,
    },
    register: {
        backgroundColor: "transparent",
        borderWidth: 1,
    },
    login: {
    },
    registerText: {
        padding: 8,
        fontWeight: '600',
    },
    loginText: {
        padding: 8,
    },
});