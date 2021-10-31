import React from 'react';
import styled from 'styled-components';
import Title from '../components/title';
import NoData from '../assets/img/noto_card-file-box.svg';

const StyledStatisticsPage = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-top: 40px;
`;

const StatisticsPage = () => {
    return (
        <StyledStatisticsPage>
            <img src={NoData} alt="No data" />
            <Title>Statistika topilmadi</Title>
        </StyledStatisticsPage>
    )
}

export default StatisticsPage;