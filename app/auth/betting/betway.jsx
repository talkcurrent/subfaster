import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Betway() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/betway.png")}
            network={"betway"}
        />
    )
}