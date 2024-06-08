import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Bet9ja(props) {
    return (
        <CommonComponent
            logo={require("../../../assets/images/bet9ja.png")}
            network={"bet9ja"}
        />
    )
}