import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
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

const CommonElement = ({ cable, logo, logoText }) => {
    const isPresented = router.canGoBack();
    const theme = useTheme();
    const [days, setdays] = useState([]);
    const [activecable, setactivecable] = useState(cable);

    const [plan, setplan] = useState('');
    const [smartcard, setsmartcard] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [automate, setautomate] = useState(false);
    const [schedule, setschedule] = useState('');
    const [day, setday] = useState('');
    const [month, setmonth] = useState('');
    const [pin, setpin] = useState('');

    useEffect(() => {
        if (!automate) {

            setschedule('')
            setday('')
            setmonth('')
        }
    }, [automate])

    useEffect(() => {
        let days = [];
        for (let index = 1; index < 27; index++) {
            days.push(`${index}`)
        }
        setdays(days)
    }, [])

    const handleInput = (val, name) => {
        switch (name) {
            case 'plan':
                setplan(val)
                break;
            case 'phoneNumber':
                setphoneNumber(val)
                break;
            case 'smartcard':
                setsmartcard(val)
                break;
            case 'automate':
                setautomate(val)
                break;
            case 'schedule':
                setschedule(val)
                break;
            case 'day':
                setday(val)
                break;
            case 'month':
                setmonth(val)
                break;
            case 'pin':
                setpin(val)
                break;

            default:
                break;
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
                    <SelectInput
                        label={"Select Plan"}
                        value={plan}
                        name={"plan"}
                        inputMode={"text"}
                        handleInputChange={(handleInput)}
                        items={['Data', 'Airtime']}
                        iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                    />
                    <CustomTextInput
                        label={"Customer phone number"}
                        value={phoneNumber}
                        name={"phoneNumber"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={11}
                    />
                    <CustomTextInput
                        label={"IUC/Smartcard number"}
                        value={smartcard}
                        name={"smartcard"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                    // maxLength={11}
                    />
                    <Checkbox
                        value={automate}
                        name={"automate"}
                        handleInputChange={handleInput}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Pressable onPress={() => setautomate(!automate)} style={{ color: theme.color }}>
                                <Text style={{ color: theme.color }}>Automate this transaction</Text>
                            </Pressable>
                        </View>
                    </Checkbox>
                    {automate ?
                        <SelectInput
                            label={"Schedule"}
                            value={schedule}
                            name={"schedule"}
                            inputMode={"text"}
                            handleInputChange={(handleInput)}
                            items={['Daily', 'Weekly', 'Monthly']}
                            iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                        />
                        : <></>}
                    {schedule == 'Weekly' ?
                        <SelectInput
                            label={"Prefered day of the week"}
                            value={day}
                            name={"day"}
                            inputMode={"text"}
                            handleInputChange={(handleInput)}
                            items={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}
                            iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                        />
                        : schedule == 'Monthly' ?
                            <SelectInput
                                label={"Prefered day of the month"}
                                value={month}
                                name={"month"}
                                inputMode={"text"}
                                handleInputChange={(handleInput)}
                                items={days}
                                iconRight={<FontAwesome5 name={'caret-down'} size={17} color={theme.color} />}
                            />
                            : <></>}
                    <CustomTextInput
                        label={"Transaction PIN"}
                        value={pin}
                        name={"pin"}
                        inputMode={"numeric"}
                        handleInputChange={handleInput}
                        maxLength={4}
                        width={120}
                        placeholder={"Your 4-digi pin"}
                    />
                    <View style={{ marginBottom: 10 }}>
                        <TouchableOpacity
                            style={{
                                alignSelf: 'flex-end',
                                backgroundColor: theme.iconColor,
                                minWidth: 100, borderRadius: 15,
                                paddingHorizontal: 15, paddingVertical: 4, alignItems: 'center',
                            }}
                        >
                            <Text style={{ color: 'white' }}>{automate ? 'Subscribe and automate' : 'Subscribe'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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