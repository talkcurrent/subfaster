import { View, Text } from 'react-native'
import React from 'react'
import CommonComponent from './CommonComponent'

const Bangbet = (props) => {
    return (
        <CommonComponent
            logo={require("../../../assets/images/bangbet.png")}
            network={"bangbet"}
        />
    )
}

export default Bangbet