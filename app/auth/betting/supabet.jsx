import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Supabet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/supabets.png")}
            network={"supabets"}
        />
    )
}