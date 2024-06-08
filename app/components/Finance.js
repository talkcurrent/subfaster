import { StyleSheet, Text, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme'
import { Link, useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { Api } from './network/api';
import customFetch from './request/customFetch';
import axios from 'axios';
import inThousands from '../reusables/inThousands';
import { AllContext } from './contexts/AllPurposeContext';

const Finance = () => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    const router = useRouter();


    const accessToken = async () => {
        const { serverHost } = Api();
        // const response = await customFetch(
        //     `${serverHost}/api/get_access_token`,
        //     'POST',
        //     '',
        // )
        // if (response.ok) {
        //     let result = await response.json();
        //     console.info(result)
        // }

        // const { data } = await axios.post(
        //     `${serverHost}/api/get_access_token`,
        //     {}
        // );

        const { data } = await axios.get(
            `${serverHost}/api/balance`,
            {}
        );

        // const { data } = await axios.post(
        //     `http://192.168.0.4:8001/api/sendto_webhook`,
        //     {}
        // );
        console.info(data)
    }
    return (
        <View style={styles.container}>
            <Link href={'/auth/transactions'} style={{ alignSelf: 'flex-end' }}>
                <View>
                    <Text style={{ color: theme.touch }}>Transactions{">"}</Text>
                </View>
            </Link>
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
                <Text style={[styles.figure, { color: theme.touch }]}>&#x20A6;{inThousands(1500)}</Text>
            </Pressable>
            <Pressable
                onPress={() => router.push('/auth/finance')}
                style={[styles.btn]}
            >
                <Text style={[styles.text, { color: theme.touch }]}>Bonuses:</Text>
                <Text style={[styles.figure, { color: theme.touch }]}>&#x20A6;{inThousands(13)}</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 18 }}>
                <Pressable
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
                </Pressable>
                <Pressable
                    style={[
                        GlobalStyle.shadow, styles.munuIcon,
                        { flex: 1, backgroundColor: theme.iconColor }
                    ]}
                    onPress={() => accessToken()}
                >
                    <View style={[styles.iconContainer]}>

                    </View>
                    <Text style={{ color: 'white', fontSize: theme.fontSize }}>Send from balance</Text>
                </Pressable>
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