export const TODO_ACTIONS = {
  ADD_TODO: 'add-todo',
  EDIT_TODO: 'edit-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  COLOR_SELECTED: 'color-selected',
  CLEAR_COMPLETED: 'clear-completed'
}

export const addTodo = todoItem => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: todoItem
  }
}

export const editTodo = (todoId, newName) => {
  return {
    type: TODO_ACTIONS.EDIT_TODO,
    payload: {
      todoId,
      newName
    }
  };
};

export const toggleTodo = todoId => {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    payload: todoId
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: TODO_ACTIONS.COLOR_SELECTED,
    payload: {
      todoId,
      color
    }
  }
}

export const deleteTodo = todoId => {
  return {
    type: TODO_ACTIONS.DELETE_TODO,
    payload: todoId
  }
}

export const clearCompleted = () => {
  return {
    type: TODO_ACTIONS.CLEAR_COMPLETED
  }
}