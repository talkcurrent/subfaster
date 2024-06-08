import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Cloudbet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/cloudbet.png")}
            network={"cloudbet"}
        />
    )
}