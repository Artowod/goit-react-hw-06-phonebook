import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './actions';
//---------redux-------------
//import { CHANGE_FILTER, ADD_ITEM, REMOVE_ITEM } from './typeConstants';
//
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
//
// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       return [...state, action.payload];
//     case REMOVE_ITEM:
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };
//---------------------------

//------redux ToolKit--------
const itemsReducer = createReducer([], {
  [actions.addItem]: (state, { payload }) => [...state, payload],
  [actions.removeItem]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
//---------------------------

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//---------redux-------------
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
//
//export default rootReducer;
//---------------------------

//------redux ToolKit--------
export default contactsReducer;
//---------------------------
