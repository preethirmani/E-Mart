import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockStore } from './mockStore';
import Register from '../components/Register'

jest.mock('../redux/apiSlice', () => require('./mockApiSlice'));

describe('Register component', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={mockStore}>
        <Register />
      </Provider>
    );
  });

  it('handles form submission and displays success message', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={mockStore}>
        <Register />
      </Provider>
    );

    fireEvent.change(getByLabelText(/firstname/i), { target: { value: 'John' } });
   
    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(getByText(/registered/i)).toBeInTheDocument();
    });
  });

  
});