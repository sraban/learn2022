import {createStore, combineReducers} from 'redux';

// ---------Reducers--------------
const reduceOne = (data = [], action) =>{ // Add to cart or batch modify
    // action.type = ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART
    return {};
}
const reduceTwo = (data = [], action) =>{ // On screen notification
  // action.type = Ticket_Followed, Ticket_unFollwed, Ticket_assignedTome, TicketOnCVarify, TicketCompleted, TicketMovedToBaclog
  return {};
}
const reduceThree = (data = [], action) =>{ // Email Notification as Marked
  // action.type = Task_Added_Under_Module, Task_Added_Under_Story, Task_Added_Under_Media, Task_Added_Under_DefectType
  return {};
}

const store = createStore( combineReducers({reduceOne, reduceTwo, reduceThree}) );

export default store;



// --------- Redux Actions Actions ----------
const addToCart = (data) => {
  console.warn("action is called", data)
  return {
      type: 'ADD_TO_CART',
      data
  }
}

const removeToCart = (data) => {
  console.warn("action removeToCart", data)
  return {
      type: 'REMOVE_FROM_CART',
      data
  }
}

const emptyCart = () => {
  console.warn("action emptyCart",)
  return {
      type: 'EMPTY_CART',
  }
}


// ----- Usage of action and redcuer as listner in any component
/*
import {useDispatch, useSelector} from 'react-redux';

const dispatch = useDispatch();
onClick={() => dispatch(addToCart(product))}
onClick={() => dispatch(removeToCart(product.name))}
onClick={() => dispatch(emptyCart())}
--------------
const resultOne = useSelector((state)=>state.reduceOne);
const resultTwo = useSelector((state)=>state.reduceTwo);
const resultThree = useSelector((state)=>state.reduceThree);
console.warn("data in header", result);
*/