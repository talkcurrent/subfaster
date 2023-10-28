import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import { Link, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

const Finance = () => {
    const theme = useTheme();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Link href={'/transactions'} style={{ alignSelf: 'flex-end' }}>
                <View>
                    <Text style={{ color: theme.touch }}>Transactions{">"}</Text>
                </View>
            </Link>
            <TouchableOpacity
                onPress={() => router.push('/finance')}
                style={[styles.btn]}
            >
                <Text style={[styles.text, { color: theme.touch }]}>Wallet ID:</Text>
                <Text style={[styles.figure, { color: theme.touch }]}>09066331761</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.push('/finance')}
                style={[styles.btn]}
            >
                <Text style={[styles.text, { color: theme.touch }]}>Balance:</Text>
                <Text style={[styles.figure, { color: theme.touch }]}>N1,500</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => router.push('/finance')}
                style={[styles.btn]}
            >
                <Text style={[styles.text, { color: theme.touch }]}>Bonuses:</Text>
                <Text style={[styles.figure, { color: theme.touch }]}>N10</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 18 }}>
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, backgroundColor: theme.iconColor }
                    ]}
                    onPress={() => router.push('/')}
                >
                    <View style={[styles.iconContainer]}>
                        <FontAwesome5 name="plus" size={18} color={theme.touch} />
                    </View>
                    <Text style={{ color: 'white', fontSize: theme.fontSize }}>Add money</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, backgroundColor: theme.iconColor }
                    ]}
                    onPress={() => router.push('/')}
                >
                    <View style={[styles.iconContainer]}>

                    </View>
                    <Text style={{ color: 'white', fontSize: theme.fontSize }}>Send from balance</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Finance

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 3,
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