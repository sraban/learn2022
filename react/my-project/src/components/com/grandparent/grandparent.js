import React from 'react';
import PropTypes from 'prop-types';
import './grandparent.scss';

import Parent from '../parent/parent.js';

const Grandparent = () => {
    
    let fromChild = (data) => {
        alert( data );
    };

    return (
      <div className="grandparent">
        Grandparent Component
        
        <pre>
          <Parent ParentName="AAA" ChildNameEvt={fromChild}/>
        </pre>

      </div>
    );
  }

Grandparent.propTypes = {};

Grandparent.defaultProps = {};

export default Grandparent;
