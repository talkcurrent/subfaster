import React, { useContext } from 'react'
import { AllContext } from './contexts/AllPurposeContext'

export default function authorizationCheck(response) {
    const { setUnAuthorized, setnetworkIssues } = useContext(AllContext)

    if (response.status == 401 || response.statusText == 'Unauthorized') {
        setUnAuthorized(true)
    } else {
        setUnAuthorized(false)
    }
    if (response.status == 502 || response.status == 503) {
        setnetworkIssues(true)
    } else {
        setnetworkIssues(false)
    }

    return
}
