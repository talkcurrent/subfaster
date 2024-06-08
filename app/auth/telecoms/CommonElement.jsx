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

const CommonElement = ({ network, logo }) => {
    const { langCode, networks, getPlans, gettingPlans, clientSettings } = useContext(AllContext);

    const isPresented = router.canGoBack();
    const theme = useTheme(clientSettings['nightMode']);
    const [days, setdays] = useState([]);

    const [subType, setsubType] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [amount, setamount] = useState('');
    const [plan, setplan] = useState('');
    const [automate, setautomate] = useState(false);
    const [schedule, setschedule] = useState('');
    const [day, setday] = useState('');
    const [month, setmonth] = useState('');
    const [pin, setpin] = useState('');

    const [error, seterror] = useState({
        subType: false, plan: false, phoneNumber: false, schedule: false, day: false, month: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        subType: "", plan: '', phoneNumber: "", schedule: "", day: "", month: '', pin: ""
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
        getPlans(network)
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
            case 'subType':
                setsubType(value)
                setplan('')
                seterror(prev => {
                    return { ...prev, plan: false };
                });
                break;
            case 'phoneNumber':
                setphoneNumber(value)
                break;
            case 'plan':
                setplan(value)
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
            subType: subType,//data or airtime
            phoneNumber: phoneNumber,
            plan: subType == 'Airtime' ? amount : plan ? plan.id : "", //airtime amount or plan ID
            pin: pin,
            network: network,
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
        <>
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
                </View>
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <SelectInput
                        label={Translate("buy data or airtime", langCode)}
                        value={subType}
                        error={error['subType']}
                        errorMsg={errorMsg['subType']}
                        name={"subType"}
                        inputMode={"text"}
                        handleInputChange={(handleInput)}
                        items={['Data', 'Airtime']}
                        iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                    />

                    <CustomTextInput
                        label={Translate("phone number", langCode)}
                        value={phoneNumber}
                        error={error['phoneNumber']}
                        errorMsg={errorMsg['phoneNumber']}
                        name={"phoneNumber"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={11}
                    />
                    {subType == Translate("data", langCode) ?
                        gettingPlans ?
                            <ActivityIndicator size="small" color={theme.iconColor} />
                            :
                            <SelectInput
                                label={Translate("data size", langCode)}
                                value={plan ? `${plan['description']} - N${inThousands(plan['cost'])}` : ""}
                                error={error['plan']}
                                errorMsg={errorMsg['plan']}
                                name={"plan"}
                                inputMode={"text"}
                                // this val is goin to be an object as gotten from items
                                handleInputChange={handleInput}
                                // ignore 'optionValue' & 'optionLabel' if items is a plain array (e.g ['item1', 'item2'])
                                // meanwhile compulsary if items are list of obj e.g [{code: 'zx1', description: 'south coast'},{}.....{}]
                                optionValue={'code'} //
                                optionLabel={'description'} //not important if optionFn is set
                                // note: 1st element of the array is used as 1st param
                                fnParams={['description', 'cost']}
                                // if your parameters are more then 2, add it to the fnParams array above
                                //this function is runned 
                                optionFn={(description, cost) => <Text>{description} - &#x20A6;{inThousands(cost)}</Text>} //
                                items={networks[network].plans}
                                iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                            />
                        : subType != '' ?
                            <CustomTextInput
                                label={Translate("amount", langCode)}
                                value={plan}
                                error={error['plan']}
                                errorMsg={errorMsg['plan']}
                                name={"plan"}
                                inputMode={'numeric'}
                                handleInputChange={handleInput}
                                // lineIndicator={false}
                                returnKeyType={'done'}
                                width={150}
                                placeholder={'100, 200, 300, e.t.c'}
                            />
                            : <></>

                    }
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
        </>
    )
}

export default CommonElement

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