import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { AllContext } from '../../components/contexts/AllPurposeContext'
import useTheme from '../../hooks/useTheme'
import Logo from '../../reusables/Logo'
import SelectBtn from '../../reusables/SelectBtn'
import Carousel from '../../reusables/slider/Carousel'
import Translate from '../../reusables/Translate'
import { Image } from 'expo-image'
import { StatusBar } from 'expo-status-bar'

const Welcome = (props) => {
    const {
        language, langCode, setlanguage, clientSettings
    } = useContext(AllContext);
    const router = useRouter()
    const theme = useTheme(clientSettings['nightMode'])

    const images = [
        { id: 0, image_name: require("../../../assets/images/carousel/refill.gif"), title: "", description: Translate("sliderTextone", langCode) },
        { id: 1, image_name: require("../../../assets/images/carousel/languages.gif"), title: "", description: Translate("slidertexttwo", langCode) },
    ];
    return (
        <View style={[styles.scrollView, { backgroundColor: theme.backgroundColor }]}>
            <StatusBar
                animated={true}
                backgroundColor={"transparent"}
                style={theme.statusBarTextColor}
            />
            <Stack.Screen options={{
                headerShown: false,
            }} />
            <View >
                {/* <Logo fontSize={40} /> */}
                <View style={{ alignItems: 'center', paddingVertical: 40 }}>
                    <Image
                        style={{ height: 100, width: 200 }}
                        source={require("../../../assets/images/loader.png")}
                        contentFit="contain"
                    // blurRadius={1.2}
                    />
                </View>
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
                <Pressable
                    style={[styles.pressable, styles.register, { borderColor: theme.iconColor }]}
                    onPress={() => router.push("/register")}
                >
                    <Text
                        style={[styles.registerText, { color: theme.iconColor }]}
                    >{Translate("sign up", langCode)}</Text>
                </Pressable>

                <Pressable
                    onPress={() => router.push('/login')}
                    style={[styles.pressable, styles.login, { backgroundColor: theme.iconColor }]}
                >
                    <Text style={[styles.loginText, { color: 'white', fontWeight: '600' }]}>{Translate("login", langCode)}</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Welcome

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
        justifyContent: "space-around",
        alignItems: 'center',
        marginBottom: 10
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