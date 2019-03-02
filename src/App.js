import React, { Component, useReducer } from 'react';
import './App.css';

const doCalculation = ({ result, op, value }) => {
  if (value === '') {
    return result;
  }

  const numberValue = parseInt(value, 10);
  switch (op) {
    case '+': {
      return result + numberValue;
    }
    case '-': {
      return result - numberValue;
    }
    case '*': {
      return result * numberValue;
    }
    case '/': {
      return result / numberValue;
    }
    case '=': {
      return numberValue;
    }
    default: {
      throw new Error(`Unknown op ${op}`);
    }
  }
};

const initialState = {
  result: 0,
  op: '=',
  value: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'VALUE': {
      return {
        ...state,
        value: state.value + action.value,
      };
    }
    case 'OP': {
      return {
        ...state,
        result: doCalculation(state),
        op: action.value,
        value: '',
      };
    }
    case 'CLEAR': {
      return initialState;
    }
    default: {
      throw new Error(`Unknown action type '${action.type}'`);
    }
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const display = state.value === '' ? state.result : state.value;

  return (
    <div>
      <div>{display}</div>
      <div>
        <button onClick={() => dispatch({ type: 'VALUE', value: '0' })}>
          0
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '1' })}>
          1
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '2' })}>
          2
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '3' })}>
          3
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '4' })}>
          4
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '5' })}>
          5
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '6' })}>
          6
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '7' })}>
          7
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '8' })}>
          8
        </button>
        <button onClick={() => dispatch({ type: 'VALUE', value: '9' })}>
          9
        </button>
        <button onClick={() => dispatch({ type: 'OP', value: '+' })}>+</button>
        <button onClick={() => dispatch({ type: 'OP', value: '-' })}>-</button>
        <button onClick={() => dispatch({ type: 'OP', value: '*' })}>*</button>
        <button onClick={() => dispatch({ type: 'OP', value: '/' })}>/</button>
        <button onClick={() => dispatch({ type: 'OP', value: '=' })}>=</button>
        <button onClick={() => dispatch({ type: 'CLEAR' })}>C</button>
      </div>
      <div>
        <p>Debug</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Equal Experts Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
