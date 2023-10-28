import React from 'react'
import CrossView from '../../reusables/CrossView'
import CommonElement from './CommonElement'

const Glo = () => {
    return (
        <CrossView>
            <CommonElement
                network={'glo'}
                logo={require("../../../assets/images/glo.png")}
            />
        </CrossView>
    )
}

export default Glo