import { combineReducers } from 'redux';
import {
  CHANGE_FILTER,
  ADD_ITEM,
  REMOVE_ITEM,
  //   STORE_ITEMS,
  //   LOAD_ITEMS,
} from './typeConstants';
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

const itemsReducer = (state = [], action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);

    // case STORE_ITEMS:
    //   return [];
    // case LOAD_ITEMS:
    //   return payload;
    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
