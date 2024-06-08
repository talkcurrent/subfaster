import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommonComponent from '../CommonComponent'

const Index = (prop) => {
    return (
        <CommonComponent
            logo={require("../../../../assets/images/ikeja.png")}
            code={"ikeja-electric"}
            disco={"Ikeja Electricity Distribution Company (IKEDC)"}
        />
    )
}

export default Index