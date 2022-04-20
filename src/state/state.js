import { createContext, useContext, useReducer } from "react";

const initialValue = {
  isModalOpen: false,
  isLoggedIn: false,
  userInfo: "Avet",
  boards: [
    {
      boardTitle: "Learn JS",
      boardId: Math.random(),
      tasks: [
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 1,
          category: "JS",
          status: "doing",
        },
        {
          title: "Learn Math",
          description: "Enhance skills",
          priority: "low",
          id: 2,
          category: "JS",
          status: "todo",
        },
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 4,
          category: "JS",
          status: "done",
        },
      ],
    },
    {
      boardTitle: "Learn to Drive",
      boardId: Math.random(),
      tasks: [
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 1,
          category: "JS",
          status: "doing",
        },
        {
          title: "Learn Math",
          description: "Enhance skills",
          priority: "low",
          id: 2,
          category: "JS",
          status: "todo",
        },
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 4,
          category: "JS",
          status: "done",
        },
      ],
    },
    {
      boardTitle: "Learn to Survive",
      boardId: Math.random(),
      tasks: [
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 1,
          category: "JS",
          status: "doing",
        },
        {
          title: "Learn Math",
          description: "Enhance skills",
          priority: "low",
          id: 2,
          category: "JS",
          status: "todo",
        },
        {
          title: "Learn English",
          description: "Enhance skills",
          priority: "medium",
          id: 4,
          category: "JS",
          status: "done",
        },
      ],
    },
  ],
};

const ACTION_TYPES = {
  IS_LOGEDIN: "IS_LOGEDIN",
  ADD_BOARD: "ADD_BOARD",
  ADD_TASK: "ADD_TASK",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_MODAL: {
      return { ...state, isModalOpen: !state.isModalOpen };
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
      console.log(action);
      const BoardAfterAddingTask = state.boards.map((item) => {
        if (item.boardTitle === action.task.category) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                title: action.task.title,
                id: Math.random(),
                status: action.task.status,
                priority: action.task.priority,
                description: action.task.description,
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
