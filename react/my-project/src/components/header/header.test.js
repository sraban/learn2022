import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Header />, div);
  createRoot(div).unmount();
});