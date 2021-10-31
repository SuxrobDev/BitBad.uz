import React,{useEffect} from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer';
import Header from '../../components/header';
import ApiServices from '../../services/ApiServices';

const StyledDashboardLayout = styled.div`
    background-color: #99CF67;
    min-height: 100vh;
`;

const DashboardLayout = ({children}) => {
    useEffect(() => {
        ApiServices.getMe({})
    },[])
    return (
        <StyledDashboardLayout>
            <div className="container-fluid px-5 py-3">
                <Header />
                {children}
            </div>
            <Footer/>
        </StyledDashboardLayout>
    )
}

export default DashboardLayout;
