import { createAction } from '@reduxjs/toolkit';

//---------redux-------------
//import {CHANGE_FILTER,ADD_ITEM,REMOVE_ITEM,FILTER_ITEMS} from './typeConstants';

// export const changeFilter = (filter = '') => ({
//   type: CHANGE_FILTER,
//   payload: filter,
// });
// export const addItem = item => ({
//   type: ADD_ITEM,
//   payload: item,
// });
// export const removeItem = id => ({
//   type: REMOVE_ITEM,
//   payload: id,
// });
// export const filterItems = id => ({
//   type: FILTER_ITEMS,
//   payload: id,
// });
//---------------------------

//------redux ToolKit--------
export const changeFilter = createAction('filter/changeFilter');
export const addItem = createAction('items/addItem');
export const removeItem = createAction('items/removeItem');
export const filterItems = createAction('items/filterItems');
//---------------------------
