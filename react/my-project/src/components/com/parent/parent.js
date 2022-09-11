import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './parent.scss';

import { userContext } from '../../../context/index1.js';
import Child from '../child/child.js';

const Parent = ({ParentName, ChildNameEvt}) => {
  const { user, setUser } = useContext(userContext);
  let fromChild = (data) => {
      alert( data );
  };
   
    return (
      <div className="parent">
        Parent Component - { ParentName }  ---- <span onClick={() => ChildNameEvt("XXXXXXXXXX")}>@fromChild()</span><br/>
        Conetx: { user.name } - { user.age }
        <pre>
          <Child ParentName="BBB" ChildNameEvt={fromChild}/>
        </pre>

      </div>
    );
};

Parent.propTypes = { ParentName: PropTypes.string.isRequired };

Parent.defaultProps = {ParentName: 'AAAAAAAAAAAAAAAAAAAAAAAA', ChildNameEvt:Function};

export default Parent;
