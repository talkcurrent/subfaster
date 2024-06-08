import React, { useState, useEffect, useRef, useContext } from 'react';
import { Animated, TextInput, View, Text, Pressable, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Divider from '../Divider';
import { AllContext } from '../../components/contexts/AllPurposeContext';

export default function CustomTextInput(props) {
    const {
        label, defaultValue, value, style, name, inputMode, error, errorMsg,
        height, handleInputChange, placeholder, multiline, editable
    } = props;
    const [focused, setfocused] = useState(false);

    const [labelWidth, setlabelWidth] = useState(0);
    const [staticLabelTop, setstaticLabelTop] = useState(0);
    const [tranformedLabelTop, settranformedLabelTop] = useState(0);
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
        if (value.length) {
            handleInputFocus()
        }
    });

    const handleInputPress = () => {
        textInputRef.current.focus();
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
        const { width, top } = event.nativeEvent.layout;
        setlabelWidth(width);
        setstaticLabelTop(top);

    };
    const handleLabel = (event) => {
        const { top } = event.nativeEvent.layout;
        settranformedLabelTop(top);

    };
    const handleInputSize = (event) => {
        const { height, width } = event.nativeEvent.contentSize;
        setstaticLabelTop(height);
    };

    const translateX = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -labelOffsetX],
        extrapolate: 'clamp'
    });

    const translateY = labelAnim.interpolate({
        inputRange: [0, 1],
        // outputRange: [0, -19],
        outputRange: [0, (staticLabelTop - tranformedLabelTop) || -19],
        extrapolate: 'clamp'
    });
    const scaleLabel = labelAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, labelScale],
        extrapolate: 'clamp'
    });

    return (
        <View>
            <View
                style={[styles.container, { backgroundColor: theme.cardBgc, width: props.width }]}
            >
                {props.iconLeft ?
                    <Pressable style={styles.iconLeft} onPress={handleInputPress}>
                        {props.iconLeft}
                    </Pressable>
                    : <></>}
                <Pressable style={styles.inputParent} onPress={handleInputPress}>
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
                            paddingBottom: 3,
                            zIndex: -1,
                            direction: "ltr",
                            justifyContent: "flex-end",
                            alignItems: "flex-start",
                        }}>
                        <Animated.Text
                            onLayout={handleLabel}
                            style={{
                                alignSelf: "flex-start",
                                justifyContent: 'flex-start',
                                color: value.length || focused ? theme.grayed : theme.color,
                                opacity: 1,
                                // transform: `translateX(${translateX}) translateY(${translateY}) scale(${scaleLabel})`
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
                        defaultValue={defaultValue}
                        inputMode={inputMode}
                        secureTextEntry={props.secureTextEntry}
                        maxLength={props.maxLength}
                        ref={textInputRef}
                        placeholderTextColor={theme.grayed}
                        placeholder={value.length || !focused ? "" : placeholder}
                        onChangeText={(text) => handleInputChange(text, name)}
                        // onContentSizeChange={handleInputSize}
                        onFocus={() => handleInputFocus()}
                        onBlur={() => handleInputBlur()}
                        enterKeyHint={"next"}
                        returnKeyType={props.returnKeyType}
                        multiline={multiline}
                        editable={editable}
                    />
                </Pressable>
                {props.iconRight ?
                    <Pressable
                        style={styles.iconRight}
                        onPress={props.onIconRightPress ? props.onIconRightPress : () => { }}
                    >
                        {props.iconRight}
                    </Pressable>
                    : <></>}
            </View>
            {props.lineIndicator !== false ?
                <Divider color={error ? "red" : "#a1a1a1"} scale={focused ? 1 : 0.4} width={props.width} />
                : <></>}
            {errorMsg?.length ? <Text style={{ color: 'red' }}>{errorMsg}</Text> : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: '#f5f5f5',
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
        gap: 2,
    },
    iconRight: {
        flexDirection: 'row',
        alignItems: "flex-end",
        paddingHorizontal: 5,
        // paddingVertical: 3,
        gap: 2,
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
        // outlineStyle: "none",
    },
    contentContainer: {
        paddingVertical: 20,
        gap: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});