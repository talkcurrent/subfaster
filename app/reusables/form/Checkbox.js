import React, { useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';
import { AllContext } from '../../components/contexts/AllPurposeContext';

const Checkbox = ({ value, name, handleInputChange, children }) => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode']);
    const [checked, setchecked] = useState(value);

    useEffect(() => {
        setchecked(value)
    }, [value])

    const onChange = () => {
        setchecked(!checked);
        handleInputChange(!checked, name);
    };

    return (
        <Pressable
            style={styles.container}
            onPress={onChange}
        >
            <View>
                {checked ?
                    <FontAwesome5 name="check-circle" size={24} color={theme.success} />
                    :
                    <FontAwesome5 name="circle" size={24} color={theme.grayed} />
                }
            </View>
            <View style={styles.text}>
                {children}
            </View>
        </Pressable>
    );
};

export default Checkbox;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        outlineStyle: "none",
        alignItems: 'center', marginTop: 10,
    },
    text: {
        flexGrow: 8,
    }
});
