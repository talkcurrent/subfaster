import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Footer = () => {
    const theme = useTheme()
    const router = useRouter()

    return (
        <View style={[styles.dashboardFooter, { borderTopColor: theme.hr }]}>
            <ScrollView
                // style={styles.scrollView}
                contentContainerStyle={styles.scrollViewFooter}
                scrollEventThrottle={1}
                horizontal={true}
            >
                <TouchableOpacity
                    style={styles.munuIcon}
                    onPress={() => router.push('/auth')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <Entypo name="home" size={25} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.munuIcon}
                    onPress={() => router.push('/auth/profile')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <FontAwesome name="user-circle" size={25} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.munuIcon}
                    onPress={() => router.push('/auth/finance')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <FontAwesome name="money" size={25} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Finance</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.munuIcon}
                    onPress={() => router.push('/auth/support')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <AntDesign name="customerservice" size={20} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.munuIcon}
                    onPress={() => router.push('/auth/settings')}
                >
                    <View style={[styles.iconContainer, { padding: 0 }]}>
                        <FontAwesome5 name="cog" size={25} color={theme.iconColor} />
                    </View>
                    <Text style={{ color: theme.color, fontSize: 10 }}>Settings</Text>
                </TouchableOpacity>
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