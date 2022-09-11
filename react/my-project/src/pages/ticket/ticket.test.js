import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Ticket from './Ticket';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Ticket />, div);
  createRoot(div).unmount();
});