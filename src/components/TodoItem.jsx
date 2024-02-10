import { colorSelected, deleteTodo, toggleTodo } from "../utils/actions/todos/actions"

export default function TodoItem({ todo, todoDispatch }) {
  const { id, name, completed, color } = todo;

  const handleStatusChange = todoId => {
    todoDispatch(toggleTodo(todoId));
  }
  
  const handleColorChange = (todoId, color) => {
    todoDispatch(colorSelected(todoId, color));
  }

  const handleDelete = todoId => {
    todoDispatch(deleteTodo(todoId));
  }

  
  // const { id, name, completed, color } = todo;
  return (
    <>
      <div key={id} className="w-full flex justify-between items-center gap-x-8 py-3 hover:bg-gray-100">
        <div className="flex gap-x-4">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={completed ? true : false}
            onChange={() => handleStatusChange(id)}
          />
          <ul>
            <li className={`${completed && 'line-through'} capitalize`}>{name}</li>
          </ul>
        </div>

        <div className="flex items-center gap-x-3">
          <div
            className={`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${color === 'green' && 'bg-green-500'}`}
            onClick={() => handleColorChange(id, 'green')}
          ></div>

          <div
            className={`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${color === 'yellow' && 'bg-yellow-500'}`}
            onClick={() => handleColorChange(id, 'yellow')}
          ></div>

          <div
            className={`h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${color === 'red' && 'bg-red-500'}`}
            onClick={() => handleColorChange(id, 'red')}
          ></div>
          <button
            onClick={() => handleDelete(id)}
            className="btn bg-red-600 text-white px-1.5 py-0.25 rounded-sm"
          >
            X
          </button>
        </div>
      </div>
      <hr />
    </>
  )
}