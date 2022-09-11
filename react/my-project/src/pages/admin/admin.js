import React from 'react';
import PropTypes from 'prop-types';
import './admin.scss';

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../services/common.js";


const Admin = () => {

    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[category, setCategory] = useState('programming');
    const[errors, setErrors] = useState(false);
    
    const {id} = useParams();

    
    const saveNote = (e) => {
      e.preventDefault();
     
      if (!title || !body) {
          setErrors(true);
          return;
      } else {
        setErrors(false);
      }

      let url = 'todos/1';
      
      API.gets(url)
        .then(response => {
            console.log("Note updated successfully", response.data);
           // history.push("/");
        })
        .catch(error => {
            console.log("Something went wrong", error);
        });

    };

    return (
      <div className="admin">
        Admin Component<br/>

            <div className="text-center">
                <h5>{id ? "Update a Note" : "Add a New Note"}</h5>
                {errors && <span style={{color: 'red', fontStyle: 'italic'}}>Please enter the mandatory fields</span>}
            </div>

            <form>
                <div className="form-group">
                    <label htmlFor="title">Note Title: <sup>*</sup></label>
                    <input  
                        type="text"  
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /> 
                </div>
                <div className="form-group">
                    <label htmlFor="body">Note Description: <sup>*</sup></label>
                    <textarea  
                        id="body"
                        className="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}>
                    </textarea> 
                </div>
                <div className="form-group">
                    <label htmlFor="category">Note Category:</label>
                    <select
                        id="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="programming">Programming</option>
                        <option value="vacation">Vacation</option>
                        <option value="meeting">Meeting</option>
                        <option value="blogging">Blogging</option>
                    </select> 
                </div>
                <div className="text-center">
                    <button onClick={(e) => saveNote(e)}>{id ? "Update Note": "Add Note"}</button>
                </div>
            </form>


      </div>
    );
  }


Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
