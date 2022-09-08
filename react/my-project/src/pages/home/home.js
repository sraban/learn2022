import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import logo from '../../logo.svg';
import { Outlet, Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <header>
          { logo }
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/report">Report</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/ticket">Ticket</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </header>

      <Outlet />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
