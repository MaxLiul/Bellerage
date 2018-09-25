import moment from 'moment';

export const initialStateOrder = {
  information : []
};

  const productArray = [
    { 
     productName:'Перец ',
     date: moment().format(),
     productPrice: ' 100'
    },
    { 
     productName:'Помидорки',
     date: moment().format(),
     productPrice: ' 200'
    },
    { 
     productName:'Хрен ',
     date: moment().format(),
     productPrice: ' 400'
    },
    { 
     productName:'Яблоки',
     date: moment().format(),
     productPrice: ' 200'
    },
];

export const rootReducer = (state = initialStateOrder, action) => {
  switch(action.type){
    case 'ADD_PRODUCT':
      let randomIndex = Math.floor(Math.random()*3);    
      console.log('state', productArray[randomIndex].productPrice)
      return {...state, information: [...state.information, productArray[randomIndex]]};

    case 'PUSH_FARM':
    //  return state.slice(1,2)
   
    default:
      return state;
  }
} 