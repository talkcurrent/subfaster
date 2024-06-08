import React, { useState, useEffect, useRef, useContext } from 'react';
import { FlatList, Animated, TextInput, View, Text, Modal, Pressable, StyleSheet, Dimensions } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Divider from '../Divider';
import SearchBar from '../buttons/SearchBar';
import isObject from '../../components/isObject';
import { AllContext } from '../../components/contexts/AllPurposeContext';

const { width, height } = Dimensions.get('screen');

export default function SelectInput(props) {
    const {
        label, value, name, inputMode, errorMsg, error,
        handleInputChange, items, placeholder, optionValue, optionLabel,
        optionFn, fnParams
    } = props;

    const [filteredItems, setFilteredItems] = useState(items);

    const [selected, setselected] = useState("");

    const [query, setquery] = useState("");
    const [focused, setfocused] = useState(false);
    const [showItems, setshowItems] = useState(false);

    const [labelWidth, setlabelWidth] = useState(0);
    //scaled down to this value during animation
    const [labelScale, setlabelScale] = useState(0.85);
    const [labelOffsetX, setlabelOffsetX] = useState(0);

    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);


    useEffect(() => {
        if (labelWidth > 0) {
            //offset after scaling
            const labelTextOffesetX = (labelWidth - (labelWidth * labelScale)) / 2;
            setlabelOffsetX(labelTextOffesetX);
        }
    }, [labelWidth, labelScale]);

    useEffect(() => {
        setFilteredItems(items)
    }, [items]);

    useEffect(() => {
        if (value.length) {
            handleInputFocus()
        }
    }, [value]);

    useEffect(() => {
        // Check if searched text is not blank
        if (query) {
            // Inserted text is not blank
            // Filter the items and update setFilteredItems
            const newData = items.filter(function (item) {
                // Applying filter for the inserted text in search bar
                const itemData = item
                    ? item.toUpperCase()
                    : ''.toUpperCase();
                const textData = query.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredItems(newData);
        } else {
            // Inserted text is blank
            // Update setFilteredItems with items
            setFilteredItems(items);
        }
    }, [query]);

    const onChangeText = (text) => {
        setquery(text);
    };

    const handleInputBlur = () => {
        if (!value.length) {
            translateUp();
        }
        setfocused(false);
    };
    const handleInputFocus = () => {
        translateDown();
        setfocused(true);
    };

    const labelAnim = useRef(new Animated.Value(0)).current;
    const textInputRef = useRef(null);

    const translateDown = () => {
        // Will change labelAnim value to 1 in 0.2 seconds
        Animated.timing(labelAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const translateUp = () => {
        Animated.timing(labelAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const handleLabelLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setlabelWidth(width);
    };

    const translateX = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -labelOffsetX],
        extrapolate: 'clamp'
    });

    const translateY = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -19],
        extrapolate: 'clamp'
    });
    const scaleLabel = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, labelScale],
        extrapolate: 'clamp'
    });
    return (
        <>
            <Pressable
                onPress={() => {
                    handleInputFocus();
                    setshowItems(!showItems);
                }}
            >
                <View
                    style={[styles.container, { backgroundColor: theme.cardBgc }]}
                >
                    {props.iconLeft ?
                        <View style={[styles.iconLeft, { color: theme.color }]} >
                            {props.iconLeft}
                        </View>
                        : <></>}
                    <View style={styles.inputParent}>
                        <View onLayout={handleLabelLayout}
                            style={{ alignSelf: "flex-start" }}
                        >
                            <Text
                                style={{
                                    opacity: 0,
                                    transform: [{ scale: labelScale }]
                                }}
                            >{label}</Text>
                        </View>
                        <Animated.View
                            style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                zIndex: 2,
                                paddingBottom: 3,
                                direction: "ltr",
                                justifyContent: "flex-end",
                                alignItems: "flex-start",
                            }}>
                            <Animated.Text
                                style={{
                                    alignSelf: "flex-start",
                                    justifyContent: 'flex-start',
                                    color: value.length ? theme.grayed : theme.color,
                                    opacity: 1,
                                    transform: [
                                        { translateX: translateX },
                                        { translateY: translateY },
                                        { scale: scaleLabel }
                                    ],
                                }}

                            >{label}</Animated.Text>
                        </Animated.View>
                        <TextInput
                            style={[styles.input, { color: theme.color }]}
                            value={value}
                            inputMode={inputMode}
                            ref={textInputRef}
                            readOnly={false}
                            placeholderTextColor={theme.grayed}
                        />
                    </View>
                    {props.iconRight ?
                        <View style={styles.iconRight}>
                            {props.iconRight}
                        </View>
                        : <></>}
                </View>
                {props.bottomLine != false ?
                    <Divider color={error ? "red" : "#a1a1a1"} scale={0.4} />
                    : ""}
                {errorMsg?.length ? <Text style={{ color: 'red' }}>{errorMsg}</Text> : <></>}
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={showItems}
                onRequestClose={() => {
                    setshowItems(!showItems);
                }}
            >
                <Pressable
                    style={[styles.centeredView]}
                    onPress={() => {
                        handleInputBlur();
                        setshowItems(!showItems);
                    }}>
                    <Pressable style={[styles.modalView, { backgroundColor: theme.backgroundColor }]} >
                        <SearchBar
                            value={query}
                            onChangeText={onChangeText}
                            iconSize={19}
                            height={30}
                            placeholder={"Search list..."}
                        />
                        <FlatList
                            style={{ flexGrow: 0, maxHeight: 300 }}
                            data={filteredItems}
                            renderItem={({ item }) => {
                                if (isObject(item)) {
                                    // console.info(item)
                                    return <Pressable
                                        style={{ padding: 6 }}
                                        onPress={() => {
                                            handleInputChange(item, name);
                                            setshowItems(!showItems);
                                            setquery("");
                                        }}
                                    >
                                        <Text style={{ color: theme.color }}>
                                            {props.optionFn(item[props.fnParams[0]], item[props.fnParams[1]])}
                                        </Text>
                                    </Pressable>
                                } else {
                                    return <Pressable
                                        style={{ padding: 6 }}
                                        onPress={() => {
                                            handleInputChange(item, name);
                                            setshowItems(!showItems);
                                            setquery("");
                                        }}
                                    >
                                        <Text style={{ color: theme.color }}>{item}</Text>
                                    </Pressable>
                                }
                            }}
                            ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
                            keyExtractor={(item, index) => index}
                            snapToAlignment={"center"}
                            pagingEnabled
                            showsVerticalScrollIndicator={false}
                        />
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 4,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    iconLeft: {
        flexDirection: 'row',
        alignItems: "flex-end",
        justifyContent: "center",
        paddingHorizontal: 5,
        paddingVertical: 3,
    },
    iconRight: {
        alignSelf: "center",
        // paddingLeft: 10,
        paddingHorizontal: 10,
    },
    inputParent: {
        flex: 8,
        justifyContent: "flex-end",
    },
    input: {
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        fontSize: 15,
        paddingTop: 5,
    },
    contentContainer: {
        paddingVertical: 20,
        gap: 5,
        maxHeight: height - 50
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    search: {
        flexDirection: "row"
    },
    modalView: {
        // margin: 20,
        borderRadius: 10,
        padding: 5,
        width: "80%",
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 900,
        textAlign: 'center',
    },
});