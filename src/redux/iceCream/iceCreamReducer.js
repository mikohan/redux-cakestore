import { BUY_ICECREAM } from './iceCreamTypes';

const initialIceCream = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIceCream - 1 };
    default:
      return state;
  }
};

export default iceCreamReducer;
