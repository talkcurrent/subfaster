import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
    return (
        <CommonComponent
            logo={require("../../../../assets/images/jedc.png")}
            code={"jos-electric"}
            disco={"Jos Electricity Distribution Company (JEDPlc)"}
        />
    )
}

export default Index