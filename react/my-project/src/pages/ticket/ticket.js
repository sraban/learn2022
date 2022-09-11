import React from 'react';
import PropTypes from 'prop-types';
import './ticket.scss';

import { useState, useEffect, useRef } from 'react';


let { json, log } = window.util;

const Ticket = () => {

  const [name, setName] = useState('Sraban');
  const [age, setAge] = useState('35');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('11=05-1988');
  const changeField = (data) => {
    setName(data);
  };

  const [login, setLogin] = useState({ email: "", password: "" });
  const changeLogin = (event) => {
    const { name, value } = event.target;
    setLogin(prevState => ({ ...prevState, [name]: value }));
    log( "inputElRef", inputEl.current );
  };

  // onmount/ onupdate
  useEffect( () => {
    log('On Load');
  }, []);
  
  // unmount for dealocating memory
  useEffect( () => {
    const timer = setInterval(() => {
      log("--------------");
    }, 2000);

    return () => {
      clearInterval(timer);
      log("Clean up...");
    };
  }, []);

  const inputEl = useRef(null);
    
    return (
      <div className="ticket">
        Ticket Component <br/>
        Name : <input type="text" onKeyUp={ (e) => changeField(e.currentTarget.value) }/> - {name}<br/>
        Age : <input type="number" onKeyUp={ (e) => setAge(e.currentTarget.value) }/> - {age}<br/>
        Gender : <input type="search" onKeyUp={ (e) => setGender(e.currentTarget.value) }/> - {gender}<br/>
        D.O.B : <input type="date" onChange={ (e) => setDob(e.currentTarget.value) }/> - {dob}<br/><br/>

        Email: <input ref={inputEl} value={login.email} name="email" onChange={changeLogin} /><br/>
        Pwd: <input value={login.password} name="password" onChange={changeLogin} /><br/>
        { json(login) }
      </div>
    );
}

Ticket.propTypes = {};

Ticket.defaultProps = {};

export default Ticket;
