import {useSelector} from 'react-redux';
import {store} from '../store';
import * as types from '../reducers/types';
export const AddRefuelAction = data => {
  console.log("data ====================>",data);
  return async dispatch => {
    try {
      await dispatch({type: types.AddRefuelRecord, payload: data});
    } catch (err) {
      console.log('Error from AddAlarm ====>', err);
    }
  };
};
