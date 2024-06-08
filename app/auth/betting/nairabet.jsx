import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

export default function Nairabet() {
    return (
        <CommonComponent
            logo={require("../../../assets/images/nairabet.png")}
            network={"nairabet"}
        />
    )
}