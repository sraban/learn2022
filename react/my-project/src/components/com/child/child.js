import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './child.scss';

import { userContext } from '../../../context/index1.js';

import Grandchild from '../grandchild/grandchild.js';

const Child = ({ParentName, ChildNameEvt}) => {

  const { user, setUser } = useContext(userContext);
  
  let fromChild = (data) => {
      alert( data );
      setUser({...user, name:'Sraban'});
  };

  return (
      <div className="child">
        Child Component - {ParentName}  ---- <span onClick={() => ChildNameEvt("YYYYYYYYYYYYY")}>@fromChild()</span> <br/>
        Context: { user.name } - { user.age }
        <pre>
          <Grandchild ParentName="CCCCCCCCCCC" ChildNameEvt={fromChild}/>
        </pre>
      </div>
    );
  }

Child.propTypes = {};

Child.defaultProps = {ParentName: 'BBBBBBBBBBBBBBBBBBBBB', ChildNameEvt:Function};

export default Child;
