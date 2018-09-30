import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import RegisterPage from '../components/Register'
import DashboardPage from '../components/Dashboard'
import HelpPage from '../components/Help'
import NotFoundPage from '../components/NotFound'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={RegisterPage} exact={true} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;