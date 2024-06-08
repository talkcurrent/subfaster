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

const CommonComponent = ({ code, logo, disco }) => {
    const { langCode, networks, getPlans, gettingPlans, clientSettings } = useContext(AllContext);

    const isPresented = router.canGoBack();
    const theme = useTheme(clientSettings['nightMode']);
    const [days, setdays] = useState([]);

    const [meterType, setmeterType] = useState('');
    const [meterNumber, setmeterNumber] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [amount, setamount] = useState('');
    const [plan, setplan] = useState('');
    const [automate, setautomate] = useState(false);
    const [schedule, setschedule] = useState('');
    const [day, setday] = useState('');
    const [month, setmonth] = useState('');
    const [pin, setpin] = useState('');

    const [error, seterror] = useState({
        meterType: false, plan: false, phoneNumber: false, schedule: false, day: false, month: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        meterType: "", plan: '', phoneNumber: "", schedule: "", day: "", month: '', pin: ""
    })

    useEffect(() => {
        if (!automate) {
            setschedule('')
            setday('')
            setmonth('')
        }
    }, [automate])

    // useEffect(() => {
    //     console.info(networks)
    // }, [networks])

    useEffect(() => {
        // getPlans(network)
        let days = [];
        for (let index = 1; index < 27; index++) {
            days.push(`${index}`);
        }
        setdays(days)
    }, [])

    const handleInput = (val, name) => {
        if (isObject(val)) {
            // it data plan 
            setplan(val)
            seterror(prev => {
                return { ...prev, [name]: false };
            });
            return
        }
        const value = val.length ? val.trim() : val;
        if (value.length) {
            seterror(prev => {
                return { ...prev, [name]: false };
            });
        }
        switch (name) {
            case 'meterType':
                setmeterType(value);
                break;
            case 'phoneNumber':
                setphoneNumber(value)
                break;
            case 'meterNumber':
                setmeterNumber(value)
                break;
            case 'amount':
                setamount(value)
                break;
            case 'automate':
                setautomate(value)
                break;
            case 'schedule':
                setschedule(value)
                break;
            case 'day':
                setday(value)
                break;
            case 'month':
                setmonth(value)
                break;
            case 'pin':
                setpin(value)
                break;

            default:
                break;
        }
    }

    const handleBuy = () => {
        const compulsary = {
            meterType: meterType,
            meterNumber: meterNumber,
            phoneNumber: phoneNumber,
            amount: amount,
            pin: pin,
            network: code,
            ...automate && { schedule: schedule },
            ...(schedule == Translate("weekly", langCode)) && { day: day },
            ...(schedule == Translate("monthly", langCode)) && { month: month },
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
                    // blurRadius={6}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 16,
                            paddingHorizontal: 10,
                            color: theme.color,
                            fontFamily: 'serif-bold'
                        }}
                    >{disco}</Text>
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <SelectInput
                        label={Translate("meter type", langCode)}
                        value={meterType}
                        error={error['meterType']}
                        errorMsg={errorMsg['meterType']}
                        name={"meterType"}
                        inputMode={"text"}
                        handleInputChange={(handleInput)}
                        items={['Prepaid', 'Postpaid']}
                        iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                    />

                    <CustomTextInput
                        label={Translate("meter number", langCode)}
                        value={meterNumber}
                        error={error['meterNumber']}
                        errorMsg={errorMsg['meterNumber']}
                        name={"meterNumber"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                    />
                    <CustomTextInput
                        label={Translate("phone number", langCode)}
                        value={phoneNumber}
                        error={error['phoneNumber']}
                        errorMsg={errorMsg['phoneNumber']}
                        name={"phoneNumber"}
                        inputMode={"numeric"}
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

                    <Checkbox
                        value={automate}
                        name={"automate"}
                        handleInputChange={handleInput}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Pressable onPress={() => setautomate(!automate)} style={{ color: theme.color }}>
                                <Text style={{ color: theme.color }}>{Translate("automate this transaction", langCode)}</Text>
                            </Pressable>
                        </View>
                    </Checkbox>
                    {automate ?
                        <SelectInput
                            label={Translate("Schedule", langCode)}
                            value={schedule}
                            error={error['schedule']}
                            name={"schedule"}
                            inputMode={"text"}
                            handleInputChange={(handleInput)}
                            items={[
                                Translate("daily", langCode),
                                Translate("weekly", langCode),
                                Translate("monthly", langCode)
                            ]}
                            iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                        />
                        : <></>}
                    {schedule == Translate("weekly", langCode) ?
                        <SelectInput
                            label={Translate("prefered day of the week", langCode)}
                            value={day}
                            error={error['day']}
                            name={"day"}
                            inputMode={"text"}
                            handleInputChange={(handleInput)}
                            items={[
                                Translate("monday", langCode),
                                Translate("tuesday", langCode),
                                Translate("wednesday", langCode),
                                Translate("thursday", langCode),
                                Translate("friday", langCode),
                                Translate("saturday", langCode),
                                Translate("sunday", langCode),
                            ]}
                            iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                        />
                        : schedule == Translate("monthly", langCode) ?
                            <SelectInput
                                label={Translate("prefered day of the month", langCode)}
                                value={month}
                                error={error['month']}
                                name={"month"}
                                inputMode={"text"}
                                handleInputChange={(handleInput)}
                                items={days}
                                iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                            />
                            : <></>}
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
                            <Text style={{ color: 'white' }}>{automate ? Translate("buy and subscribe", langCode) : Translate("buy", langCode)}</Text>
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
        flex: 1,
        marginTop: 30,
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