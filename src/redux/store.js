import { combineReducers, createStore } from 'redux';
import productsReducer from './products-reducer';
import basketReducer from './basket-reducer';

let reducers = combineReducers({
   productsPage: productsReducer,
   basketPage: basketReducer
});

const store = createStore(reducers);

export default store;