import './App.css'
import Header from './components/Header'
import Todos from './components/Todos'
import Filter from './components/Filter'
import { createContext, useReducer } from 'react';
import { todoReducer } from './utils/reducers/todos/todoReducer';
import { initialTodoState } from './utils/initialState/todos/initialTodoState';
import { filterReducer } from './utils/reducers/filters/filterReducer';
import { initialFilterState } from './utils/initialState/filters/initialFilterState';

export const TodoContext = createContext();
export const FilterContext = createContext();

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialTodoState);
  const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <TodoContext.Provider value={{state: todoState, dispatch: todoDispatch}}>
      <FilterContext.Provider value={{state: filterState, dispatch: filterDispatch}}>
        <Header />
        <Todos />
        <Filter />
      </FilterContext.Provider>
    </TodoContext.Provider>
  )
}

export default App;