import { useContext } from "react"
import { useState } from "react";
import { addTodo, clearCompleted } from "../utils/actions/todos/actions";
import TodoItem from "./TodoItem";
import { FilterContext, TodoContext } from "../App";

export default function TodoForm() {
  // const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const todoContext = useContext(TodoContext);
  const { state, dispatch } = todoContext;

  const filterContext = useContext(FilterContext);
  const {status, colors} = filterContext.state;

  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }

  // filter by status
  const filterByStatus = todo => {
    switch (status) {
      case 'Completed':
        return todo.completed;
      case 'Incomplete':
        return !todo.completed; 
      default:
        return true;
    }
  }

  const filterByColors = todo => {
    if(colors.length > 0) {
      return colors.includes(todo?.color);
    } else {
      return true;
    }
  }

  // filter & map over "todos"
  const todos = (
    state
      .filter(filterByStatus)
      .filter(filterByColors)
      .map(todo =>
        <TodoItem key={todo.id} todo={todo} todoDispatch={dispatch} />
    )
  )

  const completedTasks = state.filter(todo => todo.completed).length;
  const totalTasks = state.length;

  const clearCompletedTasks = () => dispatch(clearCompleted());

  // console.log(completedTasks);

  return (
    <section className="mt-40">
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-2 sm:gap-x-4 gap-y-3 justify-center items-center p-4 rounded-md"
      >
        <input
          type="text"
          placeholder="Add a Tech"
          className="text-lg px-4 py-3 border-none outline-none bg-slate-200 text-gray-500 rounded-md w-full sm:w-4/5 md:w-3/5"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className="btn bg-blue-600 text-white px-2 rounded-md text-3xl font-semibold pb-1">
          +
        </button>
      </form>

      <div
        className="block mx-auto mt-2 text-gray-700 max-h-72 overflow-y-auto"
      >
        {todos}
      </div>


      {/* task counter */}
      {
        totalTasks
        ?
          completedTasks !== 0
          ?
          (
            <div className="mt-5 flex flex-col-reverse sm:flex-row justify-around items-center gap-x-1 gap-y-3">
              <div className="text-center bg-blue-100 px-4 py-2 rounded-md">
                {completedTasks} out of {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'} {completedTasks === 1 ? 'is' : 'are'} completed
              </div>
              <button
                className="btn bg-green-700 text-white px-4 py-2 rounded-md"
                onClick={clearCompletedTasks}
              >
                Clear Completed Tasks
              </button>
            </div>
          )
          :
          (
            <div className="mt-5 text-center bg-blue-100 py-2 rounded-md">
              Nothing completed
            </div>
          )
        :
        null
      }
    </section>
  )
}