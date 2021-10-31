import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import NoData from '../assets/img/noto_card-file-box.svg';

const StyledOqimlarPage = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-top: 40px;
`;

const OqimlarPage = () => {
    return (
        <StyledOqimlarPage>
            <img src={NoData} alt="No data" />
            <Title>Oqimlar mavjud emas</Title>
        </StyledOqimlarPage>
    )
}

export default OqimlarPage;