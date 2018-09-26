export const initialStateOrder = {
  shopOrder : []
  // name : '',
  // time : '',
  // price : '',
};

export const initialStateFarm = {
  farmOrder : []
}

export const rootReducer = (state = initialStateOrder, action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      return {...state, shopOrder: [action.payload, ...state.shopOrder]};

    case 'PUSH_FARM':
      const shopOrder = [...state.shopOrder];
      shopOrder.pop();

      // const productToFarm = state.shopOrder.pop();
     // initialStateFarm.farmOrder.push(productToFarm);
      console.log(state.shopOrder);
      return{ ...state, shopOrder}
   
    default:
      return state;
  }
} 