import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AllContext } from '../components/contexts/AllPurposeContext'
import { Redirect, useRouter } from 'expo-router';

export default function useMiddleware(middleware) {
    const context = useContext(AllContext)
    const router = useRouter()

    if (context) {
        const { authUser, gettingAuthUser } = context;
        if (
            middleware.toLowerCase() == 'guest'
            && !gettingAuthUser
            && authUser
        ) {
            router.replace('/')
        }

        if (
            middleware.toLowerCase() == 'auth'
            && !gettingAuthUser
            && !authUser
        ) {
            router.replace('/login')
        }
    }
}