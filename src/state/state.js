import { createContext, useContext, useReducer } from "react";
import uuid from "react-uuid";
import { tasksMockData } from "../data";
const initialValue = {
  isLoggedIn: false,
  userInfo: {},
  categories: [{ id: "01", category: "JS" }],
  tasks: tasksMockData,
  board: [...tasksMockData],
  
};

const ACTION_TYPES = {
  ADD_CATEGORY: "ADD_CATEGORY",
  SET_TASKS: "SET_TASKS",
  IS_LOGEDIN: "IS_LOGEDIN",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_LOGEDIN: {
      return { ...state, isLoggedIn: true };
    }

    // case ACTION_TYPES.ADD_CATEGORY: {
    //   return {
    //     ...state,
    //     categories: [
    //       ...state.categories,
    //       { id: uuid(), category: action.categoryTitle },
    //     ],
    //   };
    // }
    // case ACTION_TYPES.SET_TASKS: {
    //   return { ...state, tasks: action.tasks };
    // }
    default:
      return state;
  }
};

const Context = createContext(initialValue);

const useSmartContext = () => useContext(Context);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ContextProvider, useSmartContext, initialValue, ACTION_TYPES };
