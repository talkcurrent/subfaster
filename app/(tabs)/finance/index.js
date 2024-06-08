import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import { Stack, router } from 'expo-router'
import CrossView from '../../reusables/CrossView'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import { FontAwesome5 } from '@expo/vector-icons'
import GlobalStyle from '../../styles/GlobalStyle'
import { AllContext } from '../../components/contexts/AllPurposeContext'

const Index = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])

    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Finance',
                    headerTintColor: theme.color,
                    headerStyle: {
                        backgroundColor: theme.backgroundColor
                    },
                    headerTitleAlign: 'center'
                }} />

            <StatusBar
                animated={true}
                style={theme.statusBarTextColor}
            />
            <ScrollView
                contentContainerStyle={[styles.scrollView]}
                // StickyHeaderComponent={ () => { } }
                stickyHeaderIndices={[1]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <View style={[styles.container, GlobalStyle.shadow, { width: '100%', backgroundColor: theme.iconColor }]}>
                    <Pressable
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Wallet ID:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>09066331761</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Balance:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>N1,500</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => router.push('/auth/finance')}
                        style={[styles.btn]}
                    >
                        <Text style={[styles.text, { color: theme.touch }]}>Bonuses:</Text>
                        <Text style={[styles.figure, { color: theme.touch }]}>N10</Text>
                    </Pressable>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 18 }}>
                        <Pressable
                            style={[
                                GlobalStyle.shadow, styles.munuIcon,
                                { flex: 1, backgroundColor: theme.iconColor }
                            ]}
                            onPress={() => router.push('/auth/')}
                        >
                            <View style={[styles.iconContainer]}>
                                <FontAwesome5 name="plus" size={18} color={theme.touch} />
                            </View>
                            <Text style={{ color: 'white', fontSize: theme.fontSize }}>Add money</Text>
                        </Pressable>
                        <Pressable
                            style={[
                                GlobalStyle.shadow, styles.munuIcon,
                                { flex: 1, backgroundColor: theme.iconColor }
                            ]}
                            onPress={() => { }}
                        >
                            <View style={[styles.iconContainer]}>

                            </View>
                            <Text style={{ color: 'white', fontSize: theme.fontSize }}>Send from balance</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ padding: 10, backgroundColor: theme.backgroundColor }}>
                    <Text style={[GlobalStyle.bold, { color: theme.touch }]}>Transactions</Text>
                </View>
                <View style={[styles.container, { padding: 0, backgroundColor: theme.backgroundColor, width: '100%' }]}>
                    <View style={{ gap: 10 }}>
                        {/* list of transactions */}
                        <View style={{ padding: 5, backgroundColor: theme.cardBgc, flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <FontAwesome5 name="minus" size={18} color={theme.iconColor} />
                                <Text style={{ color: theme.color }}>N750</Text>
                            </View>
                            <View>
                                <View><Text style={{ color: theme.color }}>MTN data to 09066331761</Text></View>
                                <View><Text style={{ color: theme.color }}>10th Nov, 2023 @ 9:00pm</Text></View>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View><Text style={{ color: theme.color }}>3GB</Text></View>
                                <View style={{ color: theme.color }}><Text>Success</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </CrossView>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {
        padding: 10,
        gap: 15
    },
    container: {
        padding: 10,
        gap: 3,
        width: '100%'
    },
    btn: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 17
    },
    figure: {
        fontSize: 14,
        fontWeight: '800',
    },
    iconContainer: {
        borderBottomStartRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: "hidden",
        padding: 5,
    },
    munuIcon: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
})