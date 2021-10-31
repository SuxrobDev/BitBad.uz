import React from 'react';
import styled from 'styled-components';

const StyledAuthLayout = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCard = styled.div`
    min-height: 300px;
    width: 301px;
    background-color: #99CF67;
    border-radius: 15px;
    padding: 22px 25px 29px 18px;
`;

const AuthLayout = ({children}) => {
    return (
        <StyledAuthLayout>
            <StyledCard>
            {children}  
            </StyledCard>
        </StyledAuthLayout>
    )
}

export default AuthLayout;
