import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducer';
import all from './all.js'

const allReducers = {
  productsReducer,
  cartReducer,
  all
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;