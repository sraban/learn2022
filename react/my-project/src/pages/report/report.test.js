import React from 'react';
import ReactDOM from 'react-dom';
import Report from './Report';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Report />, div);
  ReactDOM.unmountComponentAtNode(div);
});