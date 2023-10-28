import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import useTheme from '../hooks/useTheme'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'

const TVSubscriptions = () => {
    const theme = useTheme()
    const router = useRouter()
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View style={{ width: "100%" }}>
            <View style={{ padding: 10 }} >
                <Text style={{ color: theme.color }}>TV subscriptions</Text>
            </View>
            <View style={[styles.menuOne, { columnGap: 5 }]}>
                {/* flex 1 to all flex elements gives each equal width */}
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/tv/dstv')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/dstv.jpg")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>DSTV</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/tv/gotv')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/gotv.png")}
                            placeholder={blurhash}
                            contentFit="cover"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>GoTV</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, height: 60, backgroundColor: theme.cardBgc }
                    ]}
                    onPress={() => router.push('/auth/tv/startimes')}
                >
                    <View style={[styles.iconContainer]}>
                        <Image
                            style={styles.image}
                            source={require("../../assets/images/startimes.png")}
                            placeholder={blurhash}
                            contentFit="contain"
                            transition={400}
                        />
                    </View>
                    <Text style={{ color: theme.color, fontSize: theme.fontSize }}>StarTimes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TVSubscriptions

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
        width: 80,
        borderRadius: 5,
    }
})