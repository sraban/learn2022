import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Admin from './Admin';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Admin />, div);
  createRoot(div).unmount();
});