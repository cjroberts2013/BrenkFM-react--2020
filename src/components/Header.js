import React from 'react';
import { NavLink } from 'react-router-dom';


// Instructions for header which is where the nav lives
// Link to home page
// Link to reviews page

const Header = () => (
    <header>
        <h1>Brenk Facility Maintenance</h1>
        <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
        <NavLink to="/reviews" activeClassName="is-active">Reviews</NavLink>
    </header>
);

export default Header