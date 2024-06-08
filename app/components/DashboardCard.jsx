import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import useTheme from '../hooks/useTheme'
import { AllContext } from './contexts/AllPurposeContext'

const DashboardCard = (props) => {
    const { clientSettings } = useContext(AllContext)
    const theme = useTheme(clientSettings['nightMode'])
    return (
        <View style={[
            theme.shadow, {
                backgroundColor: theme.backgroundColor,
                width: props.width,
                paddingHorizontal: props.paddingH,
            }
        ]}>
            {props.children}
        </View>
    )
}

export default DashboardCard

const styles = StyleSheet.create({})