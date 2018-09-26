import { combineReducers } from 'redux';

const initialStateOrder = {
  shopOrder : []
};

 const initialStateFarm = {
  farmOrder : []
}

 const initialStateBudjet = {
   budget : {
     totalIncomes : 0,
     sellersCosts : 0,
     farmCosts : 0,
     deliveryCosts: 0,
     result: 0     
   }
 }

const orderReducer = (state = initialStateOrder, action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
    return {...state, shopOrder: [...state.shopOrder, action.payload]};
    
    case 'PUSH_FARM':
     const shopOrder = [...state.shopOrder];
     shopOrder.shift();
     return{ ...state, shopOrder }
    
    default:
    return state;
  }
} 

const farmReducer = (state = initialStateFarm, action) => {
  switch(action.type){
    case 'PUSH_FARM':
      return {...state, farmOrder: [...state.farmOrder, action.payload]};
    case 'PUSH_CLIENT':
      const farmOrder = [...state.farmOrder];
      farmOrder.shift();
      return{ ...state, farmOrder } 

    default:
      return state;
  }
}

const budgetReducer = (state = initialStateBudjet, action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      return {
        ...state, 
        budget: {
          ...state.budget, 
          totalIncomes: state.budget.totalIncomes + action.payload.productPrice,
          sellersCosts: state.budget.sellersCosts - 20,
          
        }
      };  

    case 'PUSH_FARM':
    return {
      ...state, 
      budget: {
        ...state.budget, 
        farmCosts: state.budget.farmCosts -100
      }
    };  
    case 'PUSH_CLIENT':
      return {
        ...state, 
        budget: {
          ...state.budget, 
          deliveryCosts: state.budget.deliveryCosts -20
        }
      }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({orderReducer, farmReducer, budgetReducer})