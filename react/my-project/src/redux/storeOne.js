import {createStore, combineReducers} from 'redux';

// ---------Reducers--------------
const reduceOne = (data = [], action) =>{ // Add to cart or batch modify
    // action.type = ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART
    return {};
}

const store = createStore( reduceOne );

export default store;



// --------- Redux Actions Actions ----------
const actionOne = (data) => {
  console.warn("action is called", data)
  return {
      type: 'common',
      data
  }
}


// ----- Usage of action and redcuer as listner in any component
/*
import {useDispatch, useSelector} from 'react-redux';

let product = useSelector((state)=>state.reduceOne);
product['modify'] = {};
const dispatch = useDispatch();
onClick={() => dispatch(actionOne(product))}
--------------
const resultOne = useSelector((state)=>state.reduceOne);
console.warn("data in header", result);
*/