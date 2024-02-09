import { useContext } from "react"
import { useState } from "react";
import { addTodo } from "../utils/actions/todos/actions";
import TodoItem from "./TodoItem";
import { TodoContext } from "../App";

export default function TodoForm() {
  // const [state, dispatch] = useReducer(todoReducer, initialTodoState);
  const todoContext = useContext(TodoContext);
  const { state, dispatch } = todoContext;

  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo('');
  }

  const completedTasks = state.filter(item => item.completed).length;
  const totalTasks = state.length;

  // console.log(completedTasks);

  return (
    <section className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-2 sm:gap-x-4 gap-y-3 justify-center items-center px-4 py-4 rounded-md"
      >
        <input
          type="text"
          placeholder="Add a Tech"
          className="w-5/6 sm:w-3/4 md:w-1/2 text-lg px-4 py-3 border-none outline-none bg-slate-200 text-gray-500 rounded-md"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button className="btn bg-blue-600 text-white px-2 rounded-md text-3xl font-semibold pb-1">
          +
        </button>
      </form>

      <TodoItem state={state} dispatch={dispatch} />

      {
        totalTasks
        ?
          completedTasks !== 0
          ?
          (
            <div className="mt-5 text-center">
              {completedTasks} of {totalTasks} {totalTasks === 1 ? 'task is' : 'tasks are'} completed
            </div>
          )
          :
          (
            <div className="mt-5 text-center">
              Nothing completed
            </div>
          )
        :
        null
      }
    </section>
  )
}