import React from 'react'
import CommonElement from './CommonElement'
import CrossView from '../../reusables/CrossView'

const Airtel = () => {
    return (
        <CrossView>
            <CommonElement
                network={'airtel'}
                logo={require("../../../assets/images/airtel.png")}
            />
        </CrossView>
    )
}

export default Airtel
