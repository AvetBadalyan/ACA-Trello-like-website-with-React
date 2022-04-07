import { createContext, useContext, useReducer } from "react";
import { tasksMockData } from "../data";
const initialValue = {
  isLoggedIn: false,
  userInfo: "Avet",
  tasks: [],
};

const ACTION_TYPES = {
  SET_TASKS: "SET_TASKS",
  IS_LOGEDIN: "IS_LOGEDIN",
  ADD_BOARD: "ADD_BOARD",
  ADD_TASK: "ADD_TASK",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_TASKS: {
      return { ...state, task: action.tasks };
    }
    case ACTION_TYPES.IS_LOGEDIN: {
      return { ...state, isLoggedIn: true };
    }

    case ACTION_TYPES.ADD_BOARD: {
      return {
        ...state,
        boards: [
          ...state.boards,
          {
            boardTitle: action.payload.boardTitle,
            boardId: action.payload.boardId,
            tasks: [],
          },
        ],
      };
    }

    case ACTION_TYPES.ADD_TASK: {
      const BoardAfterAddingTask = state.boards.map((item) => {
        if (item.boardId === action.boardId) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                title: action.task,
                id: Math.random(),
                status: action.status,
                priority: action.priority,
                description: "your input",
              },
            ],
          };
        } else {
          return item;
        }
      });
      return { ...state, boards: BoardAfterAddingTask };
    }
    default:
      return state;
  }
}

const Context = createContext(initialValue);

const useSmartContext = () => useContext(Context);

function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ContextProvider, useSmartContext, initialValue, ACTION_TYPES };
