import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import CrossView from '../../reusables/CrossView'
import { Link, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import GlobalStyle from '../../styles/GlobalStyle'
import { AllContext } from '../../components/contexts/AllPurposeContext'

const Index = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    return (
        <CrossView showFooter >
            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Support',
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
                // stickyHeaderIndices={[0]}
                onScroll={() => { }}
                scrollEventThrottle={1}
            >
                <View style={{ margin: 10, gap: 10 }}>
                    <View style={[styles.container, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                        <View style={{ gap: 10 }}>
                            <Text style={{ fontWeight: '700', color: theme.color }}>Direct Messages:</Text>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <FontAwesome5 name={'whatsapp'} size={25} color={'green'} />
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '85%' }}>
                                    <Link href={"https://wa.me/2349066331761"} style={{ color: theme.color }}>Whatsapp</Link>
                                    <Link href={"https://wa.me/2349066331761"}>
                                        <Pressable
                                            style={{
                                                flexDirection: 'row',
                                                backgroundColor: theme.iconColor,
                                                paddingHorizontal: 10,
                                                paddingVertical: 3,
                                                borderRadius: 10,
                                                gap: 5,
                                            }}
                                        >
                                            <FontAwesome name={'send'} size={18} color={'white'} />
                                            <Text style={{ color: 'white' }}>Chat</Text>
                                        </Pressable>
                                    </Link>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.container, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                        <View style={{ gap: 10 }}>
                            <Text style={{ fontWeight: '700', color: theme.color }}>Social Links:</Text>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <FontAwesome5 name={'facebook'} size={25} color={'blue'} />
                                <Link href={"https://wa.me/2349066331761"} style={{ color: theme.color }}>Facebook</Link>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <FontAwesome5 name={'instagram'} size={25} color={'indianred'} />
                                <Link href={"https://wa.me/2349066331761"} style={{ color: theme.color }}>Instagram</Link>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <FontAwesome5 name={'twitter'} size={25} color={'blue'} />
                                <Link href={"https://wa.me/2349066331761"} style={{ color: theme.color }}>Twitter</Link>
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

    },
    container: {
        gap: 20,
        padding: 10
    }
})