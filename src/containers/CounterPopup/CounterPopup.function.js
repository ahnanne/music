import React from 'react';
import styles from './CounterPopup.module.scss';

/* -------------------------------------------------------------------------- */

const STATUS = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
};

const initialState = {
  sentence: 'Hi!',
  count: 0,
};

const { INCREASE, DECREASE } = STATUS;

function reducer(state, action) {

  switch (action.type) {
    case INCREASE:
      return {...state, count: state.count + 1};
    case DECREASE:
      return {...state, count: state.count - 1};

    default:
      return state;
  }
}

/* -------------------------------------------------------------------------- */

export default function CounterPopup() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { sentence, count } = state;

  console.log(React.useReducer(() => {}, { number: 1 }));

  return (
    <div className={styles['popup']}>
      <h1 className={styles['h']}>m i n i COUNTER</h1>
      <button
        className={`${styles['button']} ${styles['plusBtn']}`}
        onClick={() => dispatch({type: DECREASE})}
      > - </button>
      {count}
      <button
        className={`${styles['button']} ${styles['minusBtn']}`}
        onClick={() => dispatch({type: INCREASE})}
      > + </button>

      <div className={styles['divider']}></div>
      <p className={styles['sentence']}>오늘의 명언: {sentence}</p>
    </div>
  );
}
