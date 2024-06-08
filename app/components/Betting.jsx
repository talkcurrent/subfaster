import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import useTheme from '../hooks/useTheme'
import { useRouter } from 'expo-router'
import { Image } from 'expo-image'
import CardItem from './CardItem'
import DashboardCard from './DashboardCard'
import { AllContext } from './contexts/AllPurposeContext'

const Betting = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])
    const router = useRouter()
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <DashboardCard
            width={"100%"}
            paddingH={10}
        >
            <View style={{ paddingVertical: 5 }} >
                <Text style={{ color: theme.color }}>Fund Your Bet Account</Text>
            </View>
            <ScrollView
                contentContainerStyle={[{ gap: 10, paddingVertical: 5 }]}
                // StickyHeaderComponent={ () => { } }
                onScroll={() => { }}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator
                scrollEventThrottle={1}
            >
                <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                    <CardItem label={"Bet9ja"} href={"/auth/betting/bet9ja"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/bet9ja.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"SportyBet"} href={"/auth/betting/sportybet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/sportybet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"1xbet"} href={"/auth/betting/ixbet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/ixbet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"BetKing"} href={"/auth/betting/betking"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/betking.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                </View>
                <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                    <CardItem label={"LiveScoreBet"} href={"/auth/betting/livescorebet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/livescorebet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"NairaBet"} href={"/auth/betting/nairabet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/nairabet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"BangBet"} href={"/auth/betting/bangbet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/bangbet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"BetWay"} href={"/auth/betting/betway"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/betway.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                </View>
                <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                    <CardItem label={"MerryBet"} href={"/auth/betting/merrybet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/merrybet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"NaijaBet"} href={"/auth/betting/naijabet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/naijabet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>
                    <CardItem label={"CloudBet"} href={"/auth/betting/cloudbet"}>
                        <Image
                            style={{ width: 60, height: 30, borderRadius: 10 }}
                            source={require("../../assets/images/cloudbet.png")}
                            contentFit="contain"
                            transition={1000}
                        />
                    </CardItem>

                </View>
            </ScrollView>
        </DashboardCard>
    )
}

export default Betting

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        // padding: 10,
        gap: 10,
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
})