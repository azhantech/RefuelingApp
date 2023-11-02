import {combineReducers} from 'redux';
import AddRefuelingRecords from './RefuelReducer';
const rootReducer = combineReducers({
  AddRefuelingRecords: AddRefuelingRecords,
});

export default rootReducer;
