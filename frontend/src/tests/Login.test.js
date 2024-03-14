import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {mockStore} from './mockStore';
import Login from "../components/Login"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
/**
 * @jest-environment jsdom
 */




describe("Login Component", () => {
  test('renders correctly with mock store',() => {  
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Login />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/email address/i)).toBeInTheDocument();
    expect(screen.getByText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/submit/i})).toBeInTheDocument(); 
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  })
  
})