import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//*---state structure---*/
// {
//   contacts: {
//     items: [{ id, name, number}],
//     filter: '',
//   },
// };
//*---------------------*/

const store = createStore(
  rootReducer,
  composeWithDevTools(),
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
