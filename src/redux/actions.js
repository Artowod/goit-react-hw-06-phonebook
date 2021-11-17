import {
  CHANGE_FILTER,
  ADD_ITEM,
  REMOVE_ITEM,
  FILTER_ITEMS,
  //   STORE_ITEMS,
  //   LOAD_ITEMS,
} from './typeConstants';

export const changeFilter = (filter = '') => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: id,
});

export const filterItems = id => ({
  type: FILTER_ITEMS,
  payload: id,
});

// export const storeItem = item => ({
//   type: STORE_ITEMS,
//   payload: item,
// });

// export const loadItems = items => ({
//   type: LOAD_ITEMS,
//   payload: [items],
// });
