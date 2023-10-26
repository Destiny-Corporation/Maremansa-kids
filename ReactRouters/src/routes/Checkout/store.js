// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';

// Importe seus reducers aqui
import cartReducer from './cart'; // Substitua com o caminho correto

// Combine seus reducers se você tiver vários
const rootReducer = combineReducers({
  cart: cartReducer,
  // Adicione outros reducers aqui, se necessário
});

// Crie a loja do Redux
const store = createStore(rootReducer, applyMiddleware(/* adicione middlewares aqui, se necessário */));

export default store;
