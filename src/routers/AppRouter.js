import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './../components/HomePage';
import ReviewsPage from './../components/ReviewsPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/reviews" component={ReviewsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
)

export default AppRouter