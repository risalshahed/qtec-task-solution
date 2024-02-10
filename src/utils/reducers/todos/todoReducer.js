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

    case TODO_ACTIONS.EDIT_TODO:
      return state.map(todo => {
        if(todo.id === action.payload.todoId) {
          return {
            ...todo,
            name: action.payload.newName
          };
        } return todo;
      });

    case TODO_ACTIONS.TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } return todo;
      });

    case TODO_ACTIONS.COLOR_SELECTED:
      // DESTRUCTURING
      const {todoId, color} = action.payload;

      return state.map(todo => {
        // console.log('todoReducer-Color_Selected', todo);
        if(todo.id !== todoId) {
          return todo;
        } else {
          return {
            ...todo,
            color
          }
        }
      })

    case TODO_ACTIONS.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload)

    case TODO_ACTIONS.CLEAR_COMPLETED:
      return state.filter(todo => !todo.completed);
  
    default:
      return state;
  }
};