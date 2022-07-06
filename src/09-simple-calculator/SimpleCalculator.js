import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  num1: 0,
  num2: 0,
  result: 0
}

function calcReducer (state, action) {
  switch (action.type) {
    case 'CHANGE_NUM1':
      return {
        ...state,
        num1: action.payload
      };
      case 'CHANGE_NUM2':
      return {
        ...state,
        num2: action.payload
      };
    case 'ADD':
      return {
        ...state,
        result: (state.num1 + state.num2)
      };
      case 'MULTIPLY':
      return {
        ...state,
        result: (state.num1 * state.num2)
      }; 
      case 'RESET':
        return initialState;
    default:
      return state;
      
  }
}

  //Type Actions

  const changeNum1 = (num) => {
    return {
      type: 'CHANGE_NUM1',
      payload: num
    }
  }

  const changeNum2 = (num) => {
    return {
      type: 'CHANGE_NUM2',
      payload: num
    }
  }

    const add = () => {
      return {
        type: 'ADD',
      }
    }

    const multiply = () => {
      return {
        type: 'MULTIPLY',
      }
    }

    const reset = () => {
      return {
        type: 'RESET',
      }
    }



const CalcContext = createContext();

export default function SimpleCalculator () {

  const [state, dispatch] = useReducer(calcReducer, initialState);
  const value = {
    num1: state.num1,
    num2: state.num2,
    result: state.result,
    setNum1: (num) => { dispatch(changeNum1(num))},
    setNum2: (num) => { dispatch(changeNum2(num))},
    setSum: () => { dispatch(add())},
    setMultiplication: () => { dispatch(multiply())},
    setReset: () => {dispatch(reset())}
  }
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <CalcContext.Provider value={value}>
      <div>
        <h2>{value.num1}</h2>
        {numbers.map(number => (
          <button onClick={() => value.setNum1(number)} key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>{value.num2}</h2>
        {numbers.map(number => (
          <button onClick={() => value.setNum2(number)} key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => value.setSum()} >+</button>
        <button onClick={() => value.setMultiplication()}>X</button>
        <button onClick={() => value.setReset()}>c</button>
      </div>
      <div><h2>Result: {value.result}</h2></div>
    </CalcContext.Provider>
  )
}
