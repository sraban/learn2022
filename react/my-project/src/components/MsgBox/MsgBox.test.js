import React from 'react';
import ReactDOM from 'react-dom';
import MsgBox from './MsgBox';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MsgBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});