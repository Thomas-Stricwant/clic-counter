import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeContainerDomain = state => state.counterContainer || initialState;
export const makeSelectHomeContainerCounter = () => createSelector(selectHomeContainerDomain, substate => substate.counter);