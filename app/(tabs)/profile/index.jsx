import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import CrossView from '../../reusables/CrossView'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import useTheme from '../../hooks/useTheme'
import { Image } from 'expo-image';
import GlobalStyle from '../../styles/GlobalStyle';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { AllContext } from '../../components/contexts/AllPurposeContext'
import { useRouteInfo } from 'expo-router/build/hooks'

const Index = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    const router = useRouter();

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                    title: 'Profile',
                    headerTintColor: theme.color,
                    headerStyle: {
                        backgroundColor: theme.backgroundColor
                    },
                    headerTitleAlign: 'center'
                }}
            />

            <StatusBar
                animated={true}
                tintColor={theme.color}
                style={theme.statusBarTextColor}
            />
            <CrossView
                showFooter
                topImage={require("../../../assets/images/stone-wall.jpeg")}
                gradientColors={['transparent', theme.backgroundColor, theme.backgroundColor, theme.backgroundColor, theme.backgroundColor]}
            >
                <ScrollView
                    contentContainerStyle={[styles.scrollView]}
                    stickyHeaderIndices={[0]}
                >
                    <View style={styles.imgContainer}>
                        <FontAwesome name="user-circle" size={100} color={theme.iconColor} />
                        {/* <Image
                            style={[styles.profile, { borderColor: theme.iconColor }]}
                            source={require(`../../../assets/images/${imgName}`)}
                            contentFit="cover"
                            transition={10}
                        /> */}
                    </View>
                    <View style={[GlobalStyle.shadow, styles.content, { backgroundColor: theme.cardBgc }]}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Pressable
                                onPress={() => router.push('/auth/updates/personalInfo')}
                                style={{
                                    flexDirection: 'row', marginRight: 10, marginBottom: 10,
                                    backgroundColor: theme.iconColor,
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                }}
                            >
                                <FontAwesome5 name={'edit'} size={18} color={'white'} />
                                <Text style={{ color: 'white' }}>Edit</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Text style={{ color: theme.color }} >Name:{" "}</Text>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>Enyoojo Blessed Akoh</Text>
                        </View>
                        <View>
                            <Text style={{ color: theme.color }}>Phone number:</Text>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>09066331761</Text>
                        </View>
                        <View>
                            <Text style={{ color: theme.color }}>Email:</Text>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>sirblezed@gmail.com</Text>
                        </View>
                        <View>
                            <Text style={{ color: theme.color }}>Address:</Text>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>No 26 eguye street, Mararaba, Nasarawa</Text>
                        </View>
                    </View>
                    <View style={[GlobalStyle.shadow, styles.content, { backgroundColor: theme.cardBgc, marginBottom: 10 }]}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: theme.color, width: '80%' }} >Login PIN:{" "}</Text>
                                <Pressable
                                    onPress={() => router.push('/auth/updates/loginPin')}
                                >
                                    <FontAwesome5 name={'edit'} size={18} color={theme.iconColor} />
                                </Pressable>
                            </View>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>******</Text>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: theme.color, width: '80%' }} >Transaction PIN:{" "}</Text>
                                <Pressable
                                    onPress={() => router.push('/auth/updates/transactionPin')}
                                >
                                    <FontAwesome5 name={'edit'} size={18} color={theme.iconColor} />
                                </Pressable>
                            </View>
                            <Text style={{ color: theme.color, fontWeight: '700' }}>****</Text>
                        </View>
                    </View>
                </ScrollView>
            </CrossView>
        </>
    )
}

export default Index

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        // marginBottom: 10
    },
    imgContainer: {
        height: 230,
        // marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        // bottom: 0,
        width: '100%',
        height: 230,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        // filter: 'brightness(0.2)',
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 4,
        borderStyle: 'solid',
    },
    content: {
        // flex: 1,
        // minHeight: 200,
        alignSelf: 'center',
        padding: 10,
        gap: 10,
    }
})