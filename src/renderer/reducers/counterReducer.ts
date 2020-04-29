import { DECREMENT, INCREMENT, CounterAction } from '../actions/counterActions';

export interface CounterState {
  readonly value: number;
}

const defaultState: CounterState = {
  value: 0,
};

export function counterReducer(state = defaultState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
}
