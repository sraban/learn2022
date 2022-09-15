import React from 'react';
import PropTypes from 'prop-types';
import './report.scss';
import { useState, useEffect, useRef } from 'react';

import Grandparent from './../../components/com/grandparent/grandparent.js';

import UserContextProvider from './../../context/index1.js';


import * as APIService from './api';

const tableDUmmy = [
  {
    company:"1111",
    country:"222",
    contact:"99999999999"
  },
  {
    company:"1111",
    country:"222",
    contact:"99999999999"
  },
  {
    company:"1111",
    country:"222",
    contact:"99999999999"
  },
  {
    company:"1111",
    country:"222",
    contact:"99999999999"
  }
];

const Report = () => {
  
  const [table, setTable] = useState(tableDUmmy);

  const [state, setState] = useState({
    message: '',
    post: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await APIService.getData(state.post);
    if(response.ok) {
      setState({
        message: 'posted successfully',
        post: ''
      })
    }
  }

  return (
    <div className="report">
      Report Component

      <table border="1" rules="all" cellspacing="5" cellpadding="5" width="100%">
        <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        {table.map((tr, index) => (
          <tr key={index}>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        ))}
        </tbody>
      </table>

      <br/>
      <br/>

      <form onSubmit={handleSubmit}>
        <label>
            Body:
          <input type="text" />
        </label>
        <input type="submit" value="Post" />
      </form>

      <br/>
      <br/>


      <pre>
        <UserContextProvider>
          <Grandparent />
        </UserContextProvider>
      </pre>


    </div>
  );
}

Report.propTypes = {};

Report.defaultProps = {};

export default Report;
