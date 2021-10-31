import React from 'react';
import {BrowserRouter as WebRouter, Switch, Redirect, Route}  from "react-router-dom"
import LayoutManager from '../layouts/LayoutManager';
import DashboardPage from '../pages/DashboardPage';
import FAQPage from '../pages/FAQPage';
import LandingPage from '../pages/LandingPage';
import LoginOrSignUp from '../pages/LoginOrSignUpPage';
import LoginPage from '../pages/LoginPage';
import OqimlarPage from '../pages/OqimlarPage';
import PageNotFound from '../pages/PageNotFound';
import ProductsPage from '../pages/ProductsPage';
import ProfilePage from '../pages/ProfilePage';
import SignUpPage from '../pages/SignUpPage';
import StatisticsPage from '../pages/StatisticsPage';
import IsAuth from '../services/auth/IsAuth';
import IsGuest from '../services/auth/IsGuest';

const Router = () => {
    return (
        <WebRouter>
            <LayoutManager>
                <IsAuth>
                    <Switch>
                        <Route path="/dashboard" exact component={DashboardPage} />
                        <Route path="/products" exact component={ProductsPage} />
                        <Route path="/oqimlar" exact component={OqimlarPage} />
                        <Route path="/statistics" exact component={StatisticsPage} />
                        <Route path="/faq" exact component={FAQPage} />
                        <Route path="/profile" exact component={ProfilePage} />
                        <Route path="/404" exact component={PageNotFound} />
                        <Route path={'*'}>
                            <Redirect to={'/404'} />
                        </Route>
                    </Switch>
                </IsAuth>
                <IsGuest>
                    <Switch>
                        <Route path="/" exact component={LandingPage} />
                        <Route path="/auth/login-or-signup" component={LoginOrSignUp} />
                        <Route path="/auth/login/:phone" component={LoginPage} />
                        <Route path="/auth/signup/:phone" component={SignUpPage} />
                        <Route path={'*'}>
                            <Redirect to={'/'} />
                        </Route>
                    </Switch>
                </IsGuest>
           </LayoutManager>
            
        </WebRouter>
    )
}

export default Router
