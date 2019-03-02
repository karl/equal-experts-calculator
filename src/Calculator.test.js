import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Calculator } from './Calculator';
import 'jest-dom/extend-expect';

const getHelpers = (getByText, getByTestId) => {
  return {
    press: (key) => fireEvent.click(getByText(key)),
    expectResult: (result) =>
      expect(getByTestId('display')).toHaveTextContent(
        new RegExp(`^${result}$`),
      ),
  };
};

describe('Calculator', () => {
  let press, expectResult;
  beforeEach(() => {
    const { getByText, getByTestId } = render(<Calculator />);
    ({ press, expectResult } = getHelpers(getByText, getByTestId));
  });

  afterEach(cleanup);

  it('starts with a display of 0', () => {
    expectResult(0);
  });

  it('can add two single digit numbers', () => {
    press('4');
    press('+');
    press('3');
    press('=');
    expectResult('7');
  });

  it('can subtract two single digit numbers', () => {
    press('4');
    press('-');
    press('3');
    press('=');
    expectResult('1');
  });

  it('can multiply two single digit numbers', () => {
    press('4');
    press('*');
    press('3');
    press('=');
    expectResult('12');
  });

  it('can divide two single digit numbers', () => {
    press('6');
    press('/');
    press('2');
    press('=');
    expectResult('3');
  });
});
