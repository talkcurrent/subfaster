import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Sportybet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/sportybet.png")}
            network={"sportybet"}
        />
    )
}