import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Merrybet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/merrybet.png")}
            network={"merrybet"}
        />
    )
}