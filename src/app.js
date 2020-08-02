import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles/styles.scss";

const HomePage = () => (
    <div>
        This is the home page
    </div>
);

const ReviewsPage = () => (
    <div>
        This is the review page
    </div>
);
const NotFound = () => (
    <div>
        Missing Content
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/reviews" component={ReviewsPage} />
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes, document.getElementById('app'))