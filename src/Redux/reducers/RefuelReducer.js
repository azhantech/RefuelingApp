import initialStates from './initialState';
import * as types from '../reducers/types';

const initialState = initialStates.refuelReducer;

const AddRefuelingRecords = (state = initialState, action) => {
  switch (action.type) {
    case types.AddRefuelRecord:
      return {
        ...state,
        refuelRecords: [...state.refuelRecords, action?.payload],
      };
    default:
      return state;
  }
};
export default AddRefuelingRecords;
