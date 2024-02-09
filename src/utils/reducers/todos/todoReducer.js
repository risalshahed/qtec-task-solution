import { TODO_ACTIONS } from "../../actions/todos/actions";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
          completed: false
        }
      ]

    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map(item => {
        if(item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        } return item;
      });

    case TODO_ACTIONS.DELETE_TODO:
      return state.filter(item => item.id !== action.payload)
  
    default:
      return state;
  }
};