import React from 'react';
import styled,{css} from 'styled-components';

const StyledButton = styled.button`
  color: ${({color}) => color || "#fff"};
  border-radius: ${({radius}) => radius || "15px"};
  font-size: ${({size}) => size || "transparent"};
  font-weight: ${({weight}) => weight || "transparent"};
  border: 0;
  outline: none;
  min-width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s ease;
  margin: ${({margin}) => margin || "0"};
  background-color: ${({background}) => background || "transparent"};
  letter-spacing: 0.01em;
  
  :active {
    outline: none;
    border: none;
  }
  ${({pink}) => pink && css`
    background-color: #F19F9D;
    :hover{
      box-shadow: 0 0 10px #F19F9D;
    }
  `}
  ${({blue}) => blue && css`
    color: #334D6E;
    :hover{
      color: #006400;
    }
  `}
  ${({green}) => green && css`
    background-color: #398739;
    :hover{
      box-shadow: 0 0 10px rgba(0, 100, 0);
    }
  `}
  ${({small}) => small && css`
    width: 114px;
    height: 27px;
  `}
  ${({medium}) => medium && css`
    width: 172px;
  `}
  ${({big}) => big && css`
    width: 200px;
    font-size: 18px;
    line-height: 27px;
  `}
`;

const Button = ({children,...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;
