import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import NoData from '../assets/img/noto_card-file-box.svg'

const StyledPageNotFound = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-top: 40px;
`;

const PageNotFound = () => {
    return (
        <StyledPageNotFound>
            <img src={NoData} alt="No data" />
            <Title>No data</Title>
        </StyledPageNotFound>
    )
}

export default PageNotFound
