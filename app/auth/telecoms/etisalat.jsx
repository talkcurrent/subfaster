import React from 'react'
import CrossView from '../../reusables/CrossView'
import CommonElement from './CommonElement'

const Etisalat = () => {
    return (
        <CrossView>
            <CommonElement
                network={'etisalat'}
                logo={require("../../../assets/images/9mobile.png")}
            />
        </CrossView>
    )
}

export default Etisalat