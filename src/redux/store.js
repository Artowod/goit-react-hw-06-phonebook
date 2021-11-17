//---------redux-------------
//import { createStore } from 'redux';
//import rootReducer from './reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';
//---------------------------

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './reducers';
import logger from 'redux-logger';

//*---state structure---*/
// {
//   contacts: {
//     items: [{ id, name, number}],
//     filter: '',
//   },
// };
//*---------------------*/

//---------redux-------------
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(),
//   //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
//---------------------------

//------redux ToolKit--------
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
//---------------------------

export default store;
