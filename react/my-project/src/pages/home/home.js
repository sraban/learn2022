import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import logo from '../../logo.svg';
import { Outlet, Link } from "react-router-dom";


const Home = () => {
  
  const reqCsrf = () => {
    // call in 4 min interval and update the csrf token n header
    // every 15 interval stop requesting csrf token
    return;
  };

  return (
    <div className="home">
        <header>
            <div className="logo">Logo...</div>
            <ul className="navbar">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/">Report</Link>
              </li>
              <li>
                <Link to="/ticket">Ticket</Link>
              </li>           
              <li>
                <Link to="/report">404</Link>
              </li>
            </ul>
        </header>

        <section>
          
          <nav>
            <ul>
              <li><a href="#">Report</a></li>
              <li><a href="#">Pref Setting</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          
          <article> 
            <div className='outlet'>
                <Outlet />  {/*- -----Layout for the Project ----- --*/}
            </div>
          </article>
        </section>

        <footer>
          <p>Footer Logo: { logo }</p>
        </footer>

    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
