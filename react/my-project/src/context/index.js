import React, { useReducer } from "react";

const initialState = {
  todoList: ["buy dinner", "run 5 km", "finish work"],
};

const actions = {
  add: (list, newItem) => {
    return newItem === "" ? list : list.concat(newItem);
  },
  remove: (list, itemToRemove) => {
    return itemToRemove === ""
      ? list
      : list.filter((item) => item !== itemToRemove);
  },
};

const PageContext = React.createContext(initialState);
const pageReducer = (state, action) => {
  switch (action.type) {
    case "add":
      state.todoList = actions.add(state.todoList, action.payload);
      return { ...state };
    default:
      throw new Error();
  }
};


const PageContextProvider = (props) => {
  const [contextState, updateContext] = useReducer(pageReducer, initialState);
  return (
    <PageContext.Provider value={{ contextState, updateContext }}>
      {props.children}
    </PageContext.Provider>
  );
};


export { PageContext, PageContextProvider, actions };

/*
# Root
import { PageContextProvider } from './context';
<PageContextProvider> </PageContextProvider>
------

# Usages in component
import React, { useContext } from 'react';
import { PageContext } from '../context';

const { contextState, updateContext } = useContext(PageContext);

function clickHandler(item) {
   updateContext({
     type: 'add',
     payload: item  
   });
 }

https://itnext.io/react-hooks-with-context-as-a-state-management-solution-526d1c13a07d
*/