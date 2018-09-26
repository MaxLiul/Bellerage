export const addNewProduct = (orderProduct) => {
  return {
    type : 'ADD_PRODUCT',
    payload : orderProduct
  }
}

export const pushToFarm = (farmProduct) => {
  return {
    type: 'PUSH_FARM',
    payload : farmProduct
  }
}

export const pushToBudget = (budget) => {
  return {
    type: 'PUSH_CLIENT',
    payload : budget
  }
}