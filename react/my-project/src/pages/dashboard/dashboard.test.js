import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Dashboard from './Dashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Dashboard />, div);
  createRoot(div).unmount();
});