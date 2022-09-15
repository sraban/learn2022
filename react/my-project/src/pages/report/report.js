import React from 'react';
import PropTypes from 'prop-types';
import './report.scss';
import { useState, useEffect, useRef } from 'react';

import Grandparent from './../../components/com/grandparent/grandparent.js';

import UserContextProvider from './../../context/index1.js';


import * as APIService from './api';

const Report = () => {
  
  const loadTable = () => {
    APIService.getData().then( res => {
      setTable( res );
    });
  };

  useEffect( () => {
    loadTable();
  },[]);



  const [table, setTable] = useState([]);
  const [state, setState] = useState({
    message: '',
    post: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await APIService.postData(state.post);
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

      <span onClick={loadTable}>Load</span>
      <table border="1" rules="all" width="100%">
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
            <td>{ tr.company }</td>
            <td>{ tr.country }</td>
            <td>{ tr.contact }</td>
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
        <input type="submit" value="Post"/>
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
