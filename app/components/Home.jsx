import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { Image } from 'expo-image';
import { AllContext } from './contexts/AllPurposeContext';
import useTheme from '../hooks/useTheme';
import CrossView from '../reusables/CrossView';
import Finance from './Finance'
import Schedule from './Schedule'
import Telecoms from './Telecoms'
import TVSubscriptions from './TVSubscriptions'
import DashboardCard from './DashboardCard'
import CardItem from './CardItem'
import Betting from './Betting';

export default function Home() {
    const { getauthUser, authUser, gettingAuthUser, clientSettings } = useContext(AllContext);
    const theme = useTheme(clientSettings['nightMode'])

    return (
        <>
            <StatusBar
                animated={true}
                style={'light'}//always light here
            />
            <CrossView
                showFooter
                topImage={require("../../assets/images/stone-wall.jpeg")}
                gradientColors={['transparent', theme.backgroundColor, theme.backgroundColor, theme.backgroundColor]}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                        title: 'Home'
                        // headerLeft: () => <Ionicons name="ios-chevron-back" size={30} color="white" />
                    }} />
                <ScrollView
                    contentContainerStyle={[styles.scrollView]}
                    // StickyHeaderComponent={ () => { } }
                    stickyHeaderIndices={[0]}
                    onScroll={() => { }}
                    scrollEventThrottle={1}
                >
                    <View style={styles.imgContainer}>
                        <View style={styles.top}>
                            <View>
                                <FontAwesome name="user-circle" size={33} color={theme.iconColor} />
                            </View>
                            <ScrollView
                                // style={styles.scrollView}
                                contentContainerStyle={{}}
                                scrollEventThrottle={1}
                                horizontal={true}
                            >
                                <Link href={"/profile"} asChild>
                                    <Text style={styles.userName}>{authUser?.name}</Text>
                                </Link>
                            </ScrollView>
                            <Pressable onPress={() => router.push('/auth/notifications')}>
                                <FontAwesome name="bell" size={30} color={theme.iconColor} />
                            </Pressable>
                        </View>

                        <View
                            style={{
                                backgroundColor: theme.iconColor,
                                height: 170,
                                width: '90%',
                                marginHorizontal: '5%',
                                position: 'absolute',
                                // opacity: 0.9,
                                top: 80,//50 - image total height 
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20,
                                borderBottomRightRadius: 30,
                                borderBottomLeftRadius: 30,
                            }}
                        >
                            <Finance />
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Schedule />
                        <Telecoms />
                        <TVSubscriptions />
                        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>

                            <DashboardCard
                                width={"60%"}
                                paddingH={10}
                            >
                                <View style={{ paddingTop: 10 }} >
                                    <Text style={{ color: theme.color }}>Electricity</Text>
                                </View>
                                <ScrollView
                                    contentContainerStyle={[styles.scrollView, { gap: 10 }]}
                                    // StickyHeaderComponent={ () => { } }
                                    onScroll={() => { }}
                                    horizontal={true}
                                    pagingEnabled={true}
                                    showsHorizontalScrollIndicator
                                    scrollEventThrottle={1}
                                >
                                    <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                                        <CardItem label={"Eko-EDC"} href={"/auth/electricity/eko"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/ekoedc.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"PH-EDC"} href={"/auth/electricity/ph"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/phed.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"ABUJA"} href={"/auth/electricity/abuja"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/abuja.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                    </View>
                                    <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                                        <CardItem label={"Kano-EDC"} href={"/auth/electricity/kano"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/kedco.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"IKEJA"} href={"/auth/electricity/ikeja"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/ikeja.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"KADUNA"} href={"/auth/electricity/kaduna"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/kaduna.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                    </View>
                                    <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                                        {/* 3 component each  */}
                                        <CardItem label={"IBADAN"} href={"/auth/electricity/ibadan"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/ibadan.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"ENUGU"} href={"/auth/electricity/enugu"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/enugu.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                        <CardItem label={"BENIN"} href={"/auth/electricity/benin"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/benin.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                    </View>
                                    <View style={[styles.menuOne, { justifyContent: "space-between" }]}>
                                        {/* 3 component each  */}
                                        <CardItem label={"Jos-EDC"} href={"/auth/electricity/jos"}>
                                            <Image
                                                style={{ width: 40, height: 27, borderRadius: 10 }}
                                                source={require("../../assets/images/jedc.png")}
                                                contentFit="contain"
                                                transition={1000}
                                            />
                                        </CardItem>
                                    </View>
                                </ScrollView>
                            </DashboardCard>
                            <DashboardCard width={"36%"} >
                                <LinearGradient
                                    colors={['grba(0, 0, 0, 0)', 'grba(0, 0, 0, 0)']}
                                    style={{ paddingTop: 10 }}
                                >
                                    <Text style={{ color: theme.color, paddingLeft: 10 }}>Checker PIN</Text>
                                </LinearGradient>
                                <View style={[styles.menuOne, { columnGap: 0 }]}>
                                    <Link href={"../auth/products"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <Image
                                                    style={{
                                                        width: 40,
                                                        height: 27,
                                                        borderRadius: 10
                                                    }}
                                                    source={require("../../assets/images/waec.png")}
                                                    contentFit="contain"
                                                    transition={1000}
                                                // blurRadius={6}
                                                />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>WAEC</Text>
                                        </View>
                                    </Link>
                                    <Link href={"../auth/products"}>
                                        <View style={styles.munuIcon}>
                                            <View style={[styles.iconContainer, { backgroundColor: theme.iconBgc }]}>
                                                <Image
                                                    style={{
                                                        width: 40,
                                                        height: 27,
                                                        borderRadius: 10
                                                    }}
                                                    source={require("../../assets/images/neco.png")}
                                                    contentFit="cover"
                                                    transition={1000}
                                                // blurRadius={6}
                                                />
                                            </View>
                                            <Text style={{ color: theme.color, fontSize: theme.fontSize }}>NECO</Text>
                                        </View>
                                    </Link>
                                </View>
                            </DashboardCard>
                        </View>
                        <Betting />
                    </View>
                </ScrollView>
            </CrossView>
        </>
    );
}

const styles = StyleSheet.create({
    scrollView: {

    },
    imgContainer: {
        height: 230,
        marginBottom: 30,
    },
    top: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.63)',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        borderRadius: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
    },
    menuOne: {
        justifyContent: "space-around",
        justifyItems: "center",
        paddingVertical: 10,
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
});
