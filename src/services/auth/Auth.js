import React,{useState} from 'react';
import Provider from '../../context/auth/AuthProvider';
import {getKey} from "../storage"

const Auth = ({children}) => {
    console.log(window.localStorage.getItem('token'),getKey('token'))
    return (
        <Provider value={{token:getKey('token')}}>
            {children}
        </Provider>
    )
}

export default Auth
