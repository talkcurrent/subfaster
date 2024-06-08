import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme'
import { Link, useRouter } from 'expo-router'
import GlobalStyle from '../styles/GlobalStyle'
import { Image } from 'expo-image'
import { AllContext } from './contexts/AllPurposeContext'

const Telecoms = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])
    const router = useRouter()
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View style={{ width: "100%" }}>
            <View style={{ padding: 10 }} >
                <Text style={{ color: theme.color }}>Buy Data/Airtime</Text>
            </View>
            <View style={[styles.menuOne, { columnGap: 5 }]}>
                {/* flex 1 to all flex elements gives each equal width */}
                <Pressable
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/telecoms/mtn')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/mtn.png")}
                            // placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>MTN</Text>
                </Pressable>

                <Pressable
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/telecoms/airtel')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/airtel.png")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>AIRTEL</Text>
                </Pressable>

                <Pressable
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/telecoms/glo')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/glo.png")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>GLO</Text>
                </Pressable>
                <Pressable
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/telecoms/etisalat')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/9mobile.png")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>9MOBILE</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Telecoms

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
        // columnGap: 30,
        rowGap: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
    },
    munuIcon: {
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        borderBottomStartRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        padding: 5,
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 5,
    }
})