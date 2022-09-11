import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Button from './Button';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Button />, div);
  createRoot(div).unmount();
});