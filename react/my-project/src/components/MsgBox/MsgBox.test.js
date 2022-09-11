import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import MsgBox from './MsgBox';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<MsgBox />, div);
  createRoot(div).unmount();
});