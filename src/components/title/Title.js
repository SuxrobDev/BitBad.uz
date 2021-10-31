import React from 'react';
import styled,{css}  from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({color}) => color || "#006400"};
  font-size: ${({size}) => size || "25px"};
  font-weight: ${({weight}) => weight || "700"};
  text-align: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    font-size: 40px;
  }
  @media (max-width: 300px) {
    font-size: 35px;
  }
  ${({card}) => card && css`
    margin: 25px 0 13px 0;
    @media (max-width: 991px) {
      font-size: 25px;
      margin: 20px 0;
    }
    @media (max-width: 450px) {
      font-size: 20px;
      margin: 13px 0;
    }
    `}
`;

const Title = ({children, ...props}) => {
    return (
        <StyledTitle {...props}>
            {children}
        </StyledTitle>
    )
}

export default Title;
