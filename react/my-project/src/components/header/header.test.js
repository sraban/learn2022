import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import { resolvePath } from 'react-router-dom';

it('It should mount', () => {
  const div = document.createElement('div');
  render(<Header />, div);
  createRoot(div).unmount();
});


it('It should mount123', () => {
  const div = document.createElement('div');
  render(<Header />, div);
  createRoot(div).unmount();
});

const fetchData = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( resolve('Sraban Kumar') , 1000);
    // setTimeout( reject('Sraban Kumar') , 1000);
    // setTimeout( reject( () => throw "empty" ) , 1000);
  });
};

it('the data is Sraban Kumar', () => {
  return fetchData().then(data => {
    expect(data).toBe('Sraban Kumar');
  });
});

test('the data is Sraban Kumar - using async', async () => {
  const data = await fetchData();
  expect(data).toBe('Sraban Kumar');
});

it('the fetch fails with an error', async () => {
  // expect.assertions(1);
  try {
    await fetchData();
    return 0/0;
  } catch (e) {
    expect(e).toMatch('error');
  }
});

it('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('Sraban Kumar');
});



