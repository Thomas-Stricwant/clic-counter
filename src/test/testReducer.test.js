import {DECREMENT, INCREMENT} from "../containers/CounterContainer/constant";
import counterReducer from "../containers/CounterContainer/reducer";

describe('Test counter reducer', () => {


   it('increment 0 to 1', () => {
      expect(counterReducer({ counter: 0 }, {type:INCREMENT})).toEqual({ counter: 1 });
   });

   it('decrement 1 to 0', () => {
      expect(counterReducer({ counter: 1 }, {type:DECREMENT})).toEqual({ counter: 0 });
   });

   it('should not go bellow 0', () => {
      expect(counterReducer({ counter: 0 }, {type:DECREMENT})).toEqual({ counter: 0 });
   });
});