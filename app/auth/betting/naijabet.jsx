import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Naijabet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/naijabet.png")}
            network={"naijabet"}
        />
    )
}