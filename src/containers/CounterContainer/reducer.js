import { DECREMENT, INCREMENT } from './constant';

export const initialState = {
  counter: 0,
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,    
        counter:state.counter - 1 >= 0 ? state.counter - 1 : state.counter,
      }
    default:
      return state;
  }
}
