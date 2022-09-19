import React from 'react';
import {act, render, screen, fireEvent, wait, cleanup, waitForElement} } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Report from './Report';

import axiosMock from "axios";

import ShallowRenderer from 'react-test-renderer/shallow';


import * as APIService from './api';
jest.mock('./api');

// it('It should mount', () => {
//   const div = document.createElement('div');
//   render(<Report />, div);
//   createRoot(div).unmount();
// });


// describe('Scoped / Nested block', () => {
//   beforeAll(() => console.log('2 - beforeAll'));
//   afterAll(() => console.log('2 - afterAll'));
//   beforeEach(() => console.log('2 - beforeEach'));
//   afterEach(() => console.log('2 - afterEach'));

//   test('', () => console.log('2 - test'));
// });


it('onload get API', async () => {
  APIService.getData.mockResolvedValueOnce({ok : true});
  const {getByText, getByLabelText, debug} = render(<Report/>);
  const pageLoad = getByText(/Load/i);
  fireEvent.click( pageLoad );
  debug(pageLoad);

});


it('form Submit with param', async  () => {
  APIService.postData.mockResolvedValueOnce({ok : true});
  const {getByText, getByLabelText, debug} = render(<Report/>);
  const inputField = getByLabelText(/Body:/i);
  const submitBtn = getByText(/Post/i);
  // fireEvent.submit(getByTestId("form"), {target: {text1: {value: 'Text' } } })
  fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
  fireEvent.click(submitBtn);
  debug(submitBtn);
  //expect(APIService.getData).toHaveBeenCalledTimes(1)
  //expect(APIService.getData).toHaveBeenCalledWith("sample title")
  //await wait(() => null)
});

// it('prevent Default', async  () => {
//   render(<Report/>);
//   let prevented = false;
//   screen.find("form").simulate("submit", {
//     preventDefault: () => {
//       prevented = true;
//     }
//   });
//   expect( prevented ).toBe(true);
// });

// it('shallow redndering', async  () => {
//   const renderer = new ShallowRenderer();
//   const wrapper = renderer.render(<Report/>);
//   expect( wrapper.state.post ).toEqual('');
// });

