import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

const Footer = () => {
    
    const initializeCityDatabase = () => {
      return Promise((resolve, reject) => {
        setTimeout( resolve([]),1000 ); 
      });
    }

    const clearCityDatabase = () => {
      return Promise.resolve([]);
    };

    return (
      <div className="footer">
        Footer Component
      </div>
    );
  }

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
