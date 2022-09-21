import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import {renderHook} from '@testing-library/react';
import Login from "./Login";

import axios from "axios";
jest.mock("axios");
afterEach(cleanup);

// export const BASE_URL = "https://jsonplaceholder.typicode.com";
// export const fetchUsers = async () => {
//   try {
//     return await axios.get(`${BASE_URL}/users`);
//   } catch (e) {
//     return [];
//   }
// };

test("username input should be rendered", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

// sraban API Passs
test("when API call passes", async () => {
  // given
  const response = { id: 1, name: "Sraban" };
  axios.get = jest.fn();
  axios.get.mockResolvedValue(response,'url');

  // when
  const { rerender, container, unmount, asFragment } = render(<Login />);
  const firstRender = asFragment();
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);

  // then
  // expect(firstRender).toMatchDiffSnapshot( asFragment() );
  await waitFor( () => expect(buttonEl).not.toHaveTextContent(/please wait.../i) );
});

// sraban API Fails
test("when API call fails", async () => {
  // given
  const message = new Error("Network Error");
  axios.get = jest.fn();
  axios.get.mockRejectedValueOnce(message,'url');

  // when
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);

  // then
  // expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/xxxx/i));
});

test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("John");

  expect(userItem).toBeInTheDocument();
});


// it('hook test - sraban', () => {

//   const {result, rerender} = renderHook( () => {
//     const [name, setName] = useState('');
    
//     React.useEffect(() => {
//       setName('Alice')
//     }, []);

//     return name
//   });

//   expect(result.current).toBe('Alice');

// });