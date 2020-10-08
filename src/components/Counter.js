import React, { memo, useCallback } from 'react';
import { connect } from 'react-redux';
import {
  createCounterDecrementAction,
  createCounterIncrementAction,
  createCounterSetStepAction,
} from '../actions';

export const Counter = memo(function (props) {
  const { value, step, increment, decrement, setStep } = props;

  return (
    <article>
      <h1>{`COUNTER VALUE: "${value}"`}</h1>

      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <label>
        <span>{`STEP VALUE: `}</span>
        <br />
        <input
          type="number"
          value={step}
          onChange={useCallback(({ target: { value } }) => {
            setStep(Number(value));
          }, [])}
        />
      </label>
    </article>
  );
});

const mapStateToProps = ({ counter }) => counter;

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(createCounterIncrementAction()),
  decrement: () => dispatch(createCounterDecrementAction()),
  setStep: v => dispatch(createCounterSetStepAction(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
