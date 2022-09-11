import React from 'react';
import PropTypes from 'prop-types';
import './grandchild.scss';

const Grandchild = ({ParentName, ChildNameEvt}) => (
  <div className="grandchild">
    Grandchild Component - { ParentName }   ---- <span onClick={() => ChildNameEvt("ZZZZZZZZZZZZZZZZ")}>@fromChild()</span>
  </div>
);

Grandchild.propTypes = {};

Grandchild.defaultProps = {ParentName:'ccccccccc', ChildNameEvt:Function };

export default Grandchild;
