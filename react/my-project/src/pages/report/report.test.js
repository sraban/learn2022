import React from 'react';
import { render, screen } from '@testing-library/react';
import { fireEvent, wait } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import Report from './Report';


import * as APIService from './api';
jest.mock('./api');



it('It should mount', () => {
  const div = document.createElement('div');
  render(<Report />, div);
  createRoot(div).unmount();
});


describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

it('form makes a api call with proper params', async  () => {
  APIService.postData.mockResolvedValueOnce({ok : true});
  const {getByText, getByLabelText, debug} = render(<Report/>);
  const inputField = getByLabelText(/Body:/i);
  const submitBtn = getByText(/Post/i);
  fireEvent.change(inputField, {'target': {'value' : 'sample title'}});
  fireEvent.click(submitBtn);
  debug(submitBtn);
  //expect(APIService.getData).toHaveBeenCalledTimes(1)
  //expect(APIService.getData).toHaveBeenCalledWith("sample title")
  //await wait(() => null)
});

it('prevent Default', async  () => {
  const wrapper = shallow(<Report/>); // const wrapper = mount(<Report/>);
  let prevented = false;
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {
      prevented = true;
    }
  });
  expect( prevented ).toBe(true);
});

it('onload get API', async () => {
  APIService.getData.mockResolvedValueOnce({ok : true});
  const {getByText, getByLabelText, debug} = render(<Report/>);
  const pageLoad = getByText(/Load/i);
  fireEvent.click( pageLoad );
  debug(pageLoad);
});