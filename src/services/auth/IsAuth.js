import React from 'react';
import { isNil } from 'lodash';
import Consumer from '../../context/auth/AuthConsumer';

const IsAuth = ({children}) => {
    
    return (
        <Consumer>
            {({token}) => token ? children : null}
        </Consumer>
    )
}

export default IsAuth;
