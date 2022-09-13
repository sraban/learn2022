import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Footer from './Footer';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Footer />, div);
  createRoot(div).unmount();
});

beforeEach(() => {
  render(<Footer />);
  return initializeCityDatabase();
});

afterEach(() => {
  render(<Footer />);
  clearCityDatabase();
});