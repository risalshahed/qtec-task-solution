export const TODO_ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

export const addTodo = todoItem => {
  return {
    type: TODO_ACTIONS.ADD_TODO,
    payload: todoItem
  }
}

export const toggleTodo = todoId => {
  return {
    type: TODO_ACTIONS.TOGGLE_TODO,
    payload: todoId
  }
}

export const deleteTodo = todoId => {
  return {
    type: TODO_ACTIONS.DELETE_TODO,
    payload: todoId
  }
}