import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Ixbet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/ixbet.png")}
            network={"1xbet"}
        />
    )
}