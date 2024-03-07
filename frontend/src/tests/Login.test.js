import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {mockStore} from './mockStore';
import Login from "../components/Login"




describe("Login Component", () => {
  test('renders correctly with mock store',() => {
    render(
      <Provider store={mockStore}>
        <Login />
      </Provider>
    );
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/submit/i})).toBeInTheDocument();

  })
  
})