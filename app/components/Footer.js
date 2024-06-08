import { ScrollView, StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import useTheme from '../hooks/useTheme'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Link, useNavigation, useRouter } from 'expo-router';
import { AllContext } from './contexts/AllPurposeContext';

const Footer = (props) => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])
    const router = useRouter()
    const nav = useNavigation()

    return (
        <View style={[styles.dashboardFooter, { borderTopColor: theme.hr }]}>
            <ScrollView
                // style={styles.scrollView}
                contentContainerStyle={styles.scrollViewFooter}
                scrollEventThrottle={1}
                horizontal={true}
            >
                <Pressable
                    style={styles.munuIcon}
                    onPress={() => router.replace('/')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <Entypo name="home" size={25} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Home</Text>
                </Pressable>
                <Link href={'/auth/profile'} >
                    <View style={styles.munuIcon}  >
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome name="user-circle" size={25} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: 10, alignSelf: 'flex-end' }}>Profile</Text>
                    </View>
                </Link>
                <Link href={'/auth/finance'}>
                    <View style={styles.munuIcon} >
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome name="money" size={25} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: 10, alignSelf: 'flex-end' }}>Finance</Text>
                    </View>
                </Link>
                <Link href={'/auth/support'}>
                    <View style={styles.munuIcon} >
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <AntDesign name="customerservice" size={20} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: 10, alignSelf: 'flex-end' }}>Support</Text>
                    </View>
                </Link>
                <Link href={'/auth/settings'}>
                    <View style={styles.munuIcon}>
                        <View style={[styles.iconContainer, { padding: 0 }]}>
                            <FontAwesome5 name="cog" size={25} color={theme.iconColor} />
                        </View>
                        <Text style={{ color: theme.color, fontSize: 10, alignSelf: 'flex-end' }}>Settings</Text>
                    </View>
                </Link>
            </ScrollView>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    scrollViewFooter: {
        flex: 1,
        gap: 10,
        justifyContent: "space-evenly",
        alignItems: 'flex-end',
        paddingVertical: 5,
    },
    dashboardFooter: {
        flexGrow: "auto",
        borderTopWidth: 1,
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