import { ActivityIndicator, Platform, Pressable, ScrollView, StyleSheet, Text, TextInputView, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link, Stack, router } from 'expo-router';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import CrossView from '../../reusables/CrossView';
import SelectInput from '../../reusables/form/SelectInput';
import CustomTextInput from '../../reusables/form/CustomTextInput';
import Checkbox from '../../reusables/form/Checkbox';
import GlobalStyle from '../../styles/GlobalStyle';
import { Image } from 'expo-image';
import useTheme from '../../hooks/useTheme';
import { AllContext } from '../../components/contexts/AllPurposeContext';
import Translate from '../../reusables/Translate';
import inThousands from '../../reusables/inThousands';
import isObject from '../../components/isObject';
import { Api } from '../../components/network/api';
import token from '../../components/token';

const CommonElement = ({ cable, logo, logoText }) => {
    const { langCode, networks, getPlans, gettingPlans, clientSettings } = useContext(AllContext);

    const isPresented = router.canGoBack();
    const theme = useTheme(clientSettings['nightMode']);
    const [days, setdays] = useState([]);

    const [plan, setplan] = useState('');
    const [smartcard, setsmartcard] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [automate, setautomate] = useState(false);
    const [schedule, setschedule] = useState('');
    const [day, setday] = useState('');
    const [month, setmonth] = useState('');
    const [pin, setpin] = useState('');
    const [customer, setcustomer] = useState('');
    const [address, setaddress] = useState('');
    const [validating, setvalidating] = useState(false);

    const [error, seterror] = useState({
        smartcard: false, plan: false, customer: false, schedule: false, day: false, month: false, pin: false
    })
    const [errorMsg, seterrorMsg] = useState({
        smartcard: "", plan: '', customer: "", schedule: "", day: "", month: '', pin: ""
    })

    useEffect(() => {
        if (!automate) {

            setschedule('')
            setday('')
            setmonth('')
        }
    }, [automate])

    useEffect(() => {
        getPlans(cable)
        let days = [];
        for (let index = 1; index < 27; index++) {
            days.push(`${index}`)
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
        switch (name) {
            case 'phoneNumber':
                setphoneNumber(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;
            case 'smartcard':
                setsmartcard(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: '' };
                });
                break;
            case 'automate':
                setautomate(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;
            case 'schedule':
                setschedule(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;
            case 'day':
                setday(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;
            case 'month':
                setmonth(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;
            case 'pin':
                setpin(val)
                seterror(prev => {
                    return { ...prev, [name]: false };
                });
                seterrorMsg(prev => {
                    return { ...prev, [name]: "" };
                });
                break;

            default:
                break;
        }
    }

    const handleValidate = async () => {
        if (smartcard) {
            const { serverHost } = Api();
            const accessToken = await token();

            setvalidating(true);

            const body = {
                cable,
                smartcard
            }
            var options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                    'X-Custom-Header': 'header value',
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(body)
            }

            const response = await fetch(`${serverHost}/api/validate_cable`, options);
            setvalidating(false);
            if (response.ok) {
                let result = await response.json()
                if (result.code == 103) {
                    seterror(prev => {
                        return { ...prev, smartcard: true }
                    })
                    seterrorMsg(prev => {
                        return { ...prev, smartcard: 'Card not valid. Please try again' }
                    })
                } else {
                    setcustomer(result.description.Customer)
                }
            }
        }
    }

    const handleBuy = () => {
        const compulsary = {
            // phoneNumber: phoneNumber,
            plan: plan.id,
            pin: pin,
            smartcard: smartcard,
            network: cable,
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
            <ScrollView
                contentContainerStyle={[styles.scrollView]}
            >
                <Image
                    style={styles.image}
                    source={logo}
                    contentFit="cover"
                    transition={1000}
                // blurRadius={6}
                />
                {logoText ?
                    <Text style={{ fontFamily: "serif-bold", fontSize: 20, color: theme.color }}>{logoText}</Text>
                    : <></>}
                <View style={[styles.form, GlobalStyle.shadow, { backgroundColor: theme.cardBgc }]}>
                    <CustomTextInput
                        label={"IUC/Smartcard number"}
                        value={smartcard}
                        error={error['smartcard']}
                        errorMsg={errorMsg['smartcard']}
                        name={"smartcard"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={13}
                    />
                    <View style={{ marginBottom: 10 }}>
                        <Pressable
                            onPress={handleValidate}
                            disabled={validating}
                            style={{
                                alignSelf: 'flex-end',
                                backgroundColor: "#657786",
                                minWidth: 100, borderRadius: 15,
                                paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center',
                            }}
                        >
                            {validating ?
                                <ActivityIndicator size="small" color={'white'} />
                                :
                                <Text style={{ color: 'white' }}>{customer ? 'Re-validate' : 'Validate'}</Text>
                            }

                        </Pressable>
                    </View>
                    {customer ?
                        <>
                            <CustomTextInput
                                label={"Customer"}
                                value={customer}
                                name={"customer"}
                                error={error['customer']}
                                errorMsg={errorMsg['customer']}
                                inputMode={"text"}
                                handleInputChange={() => { }}
                                editable={false}
                                lineIndicator={false}
                            />
                            {address ?
                                <CustomTextInput
                                    label={"Customer's Address"}
                                    value={address}
                                    name={"address"}
                                    inputMode={"text"}
                                    handleInputChange={(val) => setaddress(val)}
                                    multiline
                                    editable={false}
                                    lineIndicator={false}
                                />
                                :
                                <></>
                            }
                            {gettingPlans ?
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
                                    items={networks[cable].plans}
                                    iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                                />}

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
                                    {/* <Text style={{ color: 'white' }}>{automate ? 'Subscribe and automate' : 'Subscribe'}</Text> */}
                                    <Text style={{ color: 'white' }}>{automate ? Translate("buy and subscribe", langCode) : Translate("buy", langCode)}</Text>
                                </Pressable>
                            </View>
                        </>
                        :
                        <></>
                    }
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

export default CommonElement

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 100,
        borderRadius: 10,
    },
    form: {
        marginTop: 30,
        width: '98%',
        minHeight: 200,
        paddingHorizontal: 10,
        gap: 5
    },
})