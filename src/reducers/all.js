const namespace = 'all'

const initialStates = {
  paramater: 
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
  date:'20180519'
}

export default function(state=initialStates, action) {
  // console.log(action.type);
  switch (action.type) {
    case `${namespace}/ADD_TO_CART`: 
      return {
        ...state,
        paramater:action.payload
      }
      break;
    case `${namespace}/ADD_TO_A`: 
      return {
        ...state,
        date:action.payload
      }
      break;
    default:
      return state;
  }
}

export function addToCart(type,paramater) {
  // console.log(type);
  return {
    type,
    payload: paramater
  }
}
export function A(type,paramater) {
  return {
    type,
    payload: paramater
  }
}