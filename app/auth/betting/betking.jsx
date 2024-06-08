import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Betking() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/betking.png")}
            network={"betking"}
        />
    )
}