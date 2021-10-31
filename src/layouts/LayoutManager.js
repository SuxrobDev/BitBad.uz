import React from 'react';
import { withRouter } from 'react-router';
import {includes,isEqual,get} from "lodash"
import LandingLayout from './LandingLayout/LandingLayout';
import DashboardLayout from './DashboardLayout/DashboardLayout';
import AuthLayout from './AuthLayout/AuthLayout';

const LayoutManager = ({children,location}) => {
    const getPath = (path) => {
        if(isEqual(path,"/")){
            return "landing";
        }
        if(includes(path,"auth")){
            return "auth";
        }
        return "dashboard";
    }

    const getLayput = () => {
        return{
            landing: LandingLayout,
            auth: AuthLayout,
            dashboard: DashboardLayout,
        }
    }

    const Layout = getLayput()[getPath(get(location, "pathname", "dashboard"))]

    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default withRouter(LayoutManager);
