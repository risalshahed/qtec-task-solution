import './App.css'
import Header from './components/Header'
import Todos from './components/Todos'
import Filter from './components/Filter'
import { createContext, useReducer } from 'react';
import { todoReducer } from './utils/reducers/todos/todoReducer';
import { initialTodoState } from './utils/initialState/todos/initialTodoState';


export const TodoContext = createContext();

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <TodoContext.Provider value={{state: todoState, dispatch: todoDispatch}}>
      <Header />
      <Todos />
      <Filter />
    </TodoContext.Provider>
  )
}

export default App;