import { ActivityIndicator, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import SelectInput from '../../reusables/form/SelectInput';
import CustomTextInput from '../../reusables/form/CustomTextInput';
import Checkbox from '../../reusables/form/Checkbox';
import GlobalStyle from '../../styles/GlobalStyle';
import { Image } from 'expo-image';
import useTheme from '../../hooks/useTheme';
import { Api } from '../../components/network/api';
import { AllContext } from '../../components/contexts/AllPurposeContext';
import Translate from '../../reusables/Translate';
import token from '../../components/token';
import inThousands from '../../reusables/inThousands';
import isObject from '../../components/isObject';
import CrossView from '../../reusables/CrossView';

const CommonComponent = ({ network, logo }) => {
    const { langCode, networks, clientSettings } = useContext(AllContext);

    const isPresented = router.canGoBack();
    const theme = useTheme(clientSettings['nightMode']);

    const [accountType, setaccountType] = useState('');
    const [customerId, setcustomerId] = useState('');
    const [amount, setamount] = useState('');
    const [pin, setpin] = useState('');

    const [error, seterror] = useState({
        accountType: false, customerId: false, amount: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        accountType: "", customerId: '', amount: "", pin: ""
    })

    const handleInput = (val, name) => {
        const value = val.length ? val.trim() : val;
        if (value.length) {
            seterror(prev => {
                return { ...prev, [name]: false };
            });
        }
        switch (name) {
            case 'accountType':
                setaccountType(value)
                break;
            case 'customerId':
                setcustomerId(value)
                break;
            case 'amount':
                setamount(value)

            default:
                break;
        }
    }

    const handleBuy = () => {
        const compulsary = {
            customerId: customerId,
            amount: amount,
            pin: pin,
            network: network,
            ...(network == "bet9ja") && { accountType: accountType },
        }

        let error = false
        for (const key in compulsary) {
            if (Object.hasOwnProperty.call(compulsary, key)) {
                const value = compulsary[key].length ? compulsary[key].trim() : compulsary[key];
                if (value == "") {
                    seterror(prev => {
                        return { ...prev, [key]: true };
                    });
                    error = true
                }
            }
        }
        if (!error) {
            console.log("Send data to PHP");
        }

    }


    return (
        <CrossView>
            <StatusBar style={Platform.OS === 'ios' && isPresented ? 'light' : theme.statusBarTextColor} />
            {!isPresented && <Link href="/"><Ionicons name="arrow-back" size={30} color={theme.color} /></Link>}
            {/* <Tooltip>Airtel modal</Tooltip> */}
            <ScrollView
                contentContainerStyle={[styles.container]}
            >
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.image}
                        source={logo}
                        contentFit="contain"
                        transition={1000}
                    // blurRadius={4}
                    />
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    {network == "bet9ja" ?
                        <SelectInput
                            label={Translate("account type", langCode)}
                            value={accountType}
                            error={error['accountType']}
                            errorMsg={errorMsg['accountType']}
                            name={"accountType"}
                            inputMode={"text"}
                            handleInputChange={(handleInput)}
                            items={['Customer', 'Agent']}
                            iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                        />
                        : <></>}
                    <CustomTextInput
                        label={Translate("customer id", langCode)}
                        value={customerId}
                        error={error['customerId']}
                        errorMsg={errorMsg['customerId']}
                        name={"customerId"}
                        inputMode={"text"}
                        handleInputChange={handleInput}
                    />
                    <CustomTextInput
                        label={Translate("amount", langCode)}
                        value={amount}
                        error={error['amount']}
                        errorMsg={errorMsg['amount']}
                        name={"amount"}
                        width={150}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                    />

                    <CustomTextInput
                        label={Translate("secret pin", langCode)}
                        value={pin}
                        error={error['pin']}
                        errorMsg={errorMsg['pin']}
                        name={"pin"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
                        width={120}
                        placeholder={Translate("your 4-digit pin", langCode)}
                    />
                    <View style={{ marginBottom: 10 }}>
                        <Pressable
                            onPress={handleBuy}
                            style={{
                                alignSelf: 'flex-end',
                                backgroundColor: theme.iconColor,
                                minWidth: 100, borderRadius: 15,
                                paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center',
                            }}
                        >
                            <Text style={{ color: 'white' }}>{Translate("pay", langCode)}</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: 50, width: 100 }}
                    source={require("../../../assets/images/loader.png")}
                    contentFit="contain"
                    transition={1000}
                // blurRadius={1.2}
                />
            </View>
        </CrossView>
    )
}

export default CommonComponent

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        // marginTop: 30,
    },
    form: {
        width: '98%',
        minHeight: 200,
        marginTop: 10,
        paddingHorizontal: 10,
        gap: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    }
})