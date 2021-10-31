import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    margin-left: 5px;
    background-color: #F0F0F0;
    ::placeholder{
        color: #929FAF;
        font-size: 12px;
    }
`;

const Input = ({value,changeValue = () => {},...props}) => {
    return (
        <StyledInput value={value} onChange = {(e) => changeValue(e.target.value)} {...props} />
    )
}

export default Input
