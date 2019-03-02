import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Calculator } from './Calculator';
import 'jest-dom/extend-expect';

describe('Calculator', () => {
  afterEach(cleanup);

  it('starts with a display of 0', () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId('display')).toHaveTextContent('0');
  });

  it('can add two single digit numbers', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    expect(getByTestId('display')).toHaveTextContent('0');

    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));

    expect(getByTestId('display')).toHaveTextContent('7');
  });
});
