import { useState } from "react";
import { colorSelected, deleteTodo, editTodo, toggleTodo } from "../utils/actions/todos/actions"

export default function TodoItem({ todo, todoDispatch }) {
  const { id, name, completed, color } = todo;

  console.log('name', name);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleStatusChange = todoId => {
    todoDispatch(toggleTodo(todoId));
  }
  
  const handleColorChange = (todoId, color) => {
    todoDispatch(colorSelected(todoId, color));
  }

  const handleDelete = todoId => {
    todoDispatch(deleteTodo(todoId));
  }

  const toggleEdit = (todoId, newName) => {
    setIsEditing(!isEditing);
    todoDispatch(editTodo(todoId, newName));
  };

  // console.log('edit', isEditing);

  
  // const { id, name, completed, color } = todo;
  return (
    <>
      <div key={id} className="w-full flex justify-between items-center gap-x-2 md:gap-x-8 py-3 hover:bg-gray-100">
        <div className="flex gap-x-4">
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={completed ? true : false}
            onChange={() => handleStatusChange(id)}
          />
          {/* <ul>
            <li className={`${completed && 'line-through'} capitalize`}>{name}</li>
          </ul> */}
          {isEditing ? (
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="border-2 border-gray-300 rounded px-2"
              autoFocus
            />
          ) : (
            <ul>
              <li className={`${completed && 'line-through'} capitalize`}>{name}</li>
            </ul>
          )}
        </div>

        <div className="flex items-center gap-x-2 sm:gap-x-3">
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
          {/* edit */}
          <button
            onClick={() => toggleEdit(id, editedName)}
            className="btn bg-blue-500 text-white px-2 py-0.5 rounded-md"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          {/* delete */}
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