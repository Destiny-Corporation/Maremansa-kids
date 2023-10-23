// cart.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Lógica para adicionar um item ao carrinho
        return { ...state, items: [...state.items, action.payload] };
  
      case 'REMOVE_FROM_CART':
        // Lógica para remover um item do carrinho
        return { ...state, items: state.items.filter(item => item.id !== action.payload) };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  