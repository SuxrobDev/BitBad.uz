import React from 'react'
import Consumer from '../../context/auth/AuthConsumer';

const IsGuest = ({children}) => {
    return (
        <Consumer>
            {({token}) => !token ? children : null}
        </Consumer>
    )
}

export default IsGuest;
