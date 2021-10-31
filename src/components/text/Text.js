import React from 'react';
import styled,{css} from 'styled-components';

const StyledText = styled.p`
    color: ${({color}) => color || "transparent"};
    font-size: ${({size}) => size || "18px"};
    font-weight: ${({weight}) => weight || "500"};
    margin: ${({margin}) => margin || "0"};
    transition: 0.5s ease;
    ${({blue}) => blue && css`
        color: #334D6E;
        :hover{
            color:#006400;
        }
    `}
`;

const Text = ({children, ...props}) => {
    return (
        <StyledText {...props}>
            {children}
        </StyledText>
    )
}

export default Text
