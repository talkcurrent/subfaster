import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import GlobalStyle from '../styles/GlobalStyle'
import { Link } from 'expo-router'

const Schedule = () => {
    const theme = useTheme();
    return (
        <View style={[
            GlobalStyle.shadow, {
                backgroundColor: theme.cardBgc,
                width: '100%',
                padding: 5
            }
        ]}>
            <View style={{ padding: 10 }}>
                <Text style={{ color: theme.color }}>Schedule</Text>
            </View>
            <View style={[styles.menuOne, { columnGap: 10 }]}>
                <Text style={{ color: theme.color }}>You currently do not have any active automatic subscription activated. <Link href={'/'} style={{ color: theme.linkColor, fontWeight: '600' }}>Set automatic subscription here</Link></Text>
            </View>
        </View>
    )
}

export default Schedule

const styles = StyleSheet.create({
    menuOne: {
        justifyContent: "space-between",
        justifyItems: "center",
        padding: 10,
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
})