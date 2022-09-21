import React from 'react';
import { render, cleanup, waitForElement, fireEvent, screen } from '@testing-library/react';
import axios from 'axios';
import Hello from './loop';

import { mount, shallow } from 'enzyme'
import { act } from 'react-dom/test-utils';

jest.mock('axios');

afterEach(cleanup);

/*
it('renders hello correctly', async () => {
  // Given
  let response = [
      { id: 1, title: 'post one' },
      { id: 2, title: 'post two' },
    ];
  axios.get = jest.fn();
  axios.get.mockResolvedValue(response ,'url');

  
  // when
  render(<Hello />);
  const useeffect = screen.getByTestId("useeffect");
  fireEvent.click(useeffect);
  

  // then
  const listNode = await waitForElement( () => getByTestId('list') );
  expect(listNode.children).toHaveLength(2);
  expect(asFragment()).toMatchSnapshot();
});
*/

describe("UseEffect test", () => {
  let wrapper;

  // clear all mocks
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with loading", () => {
    wrapper = shallow(<Hello />);
  });

  test("should loading posts", async () => {
        // Given
          let data = {data: [
            { id: 1, title: 'post one' },
            { id: 2, title: 'post two' },
          ]};
        
        await act(async () => {
          axios.get.mockImplementationOnce( () => Promise.resolve(data) );
          // axios.get.mockImplementationOnce(() => Promise.reject(new Error("errorMessage-----")) );
          wrapper = mount(<Hello />);
        });
        wrapper.update();
        

        // then
        await expect(axios.get).toHaveBeenCalledTimes(1);
        // const listNode = await waitForElement( () => getByTestId('list') );
        // expect(listNode.children).toHaveLength(2);
        // expect(asFragment()).toMatchSnapshot();

  });

});