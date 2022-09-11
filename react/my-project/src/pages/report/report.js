import React from 'react';
import PropTypes from 'prop-types';
import './report.scss';

import Grandparent from './../../components/com/grandparent/grandparent.js';

import UserContextProvider from './../../context/index1.js';

const Report = () => (
  <div className="report">
    Report Component


    <pre>
      <UserContextProvider>
        <Grandparent />
      </UserContextProvider>
    </pre>


  </div>
);

Report.propTypes = {};

Report.defaultProps = {};

export default Report;
