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

  it('can handle multiple digit numbers', () => {
    press('4');
    press('3');
    press('2');
    press('+');
    press('1');
    press('2');
    press('3');
    press('=');
    expectResult('555');
  });

  it('allows changing of the operator', () => {
    press('8');
    press('-');
    press('+');
    press('9');
    press('=');
    expectResult('17');
  });

  it('an operator after a value implicitly calculates intermediate result', () => {
    press('4');
    press('-');
    press('3');
    press('+');
    expectResult('1');
    press('5');
    press('=');
    expectResult('6');
  });

  it('resets all state on clear', () => {
    press('4');
    press('+');
    press('C');
    expectResult('0');
    press('3');
    press('=');
    expectResult('3');
  });

  it('treats divide by 0 as Infinity', () => {
    press('7');
    press('/');
    press('0');
    press('=');
    expectResult('Infinity');
  });

  it('handles negative results', () => {
    press('2');
    press('-');
    press('9');
    press('=');
    expectResult('-7');
    press('-');
    press('3');
    press('=');
    expectResult('-10');
  });
});
