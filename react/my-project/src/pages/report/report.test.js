import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Report from './Report';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Report />, div);
  createRoot(div).unmount();
});