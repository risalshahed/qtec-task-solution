import { useState } from "react"
import { deleteTodo, toggleTodo } from "../utils/actions/todos/actions"

export default function TodoItem({ state, dispatch }) {

  // console.log(state);
  const items = (
    state.map(item =>
      <>
        <div key={item.id} className="w-full flex justify-between items-center gap-x-8 py-3 hover:bg-gray-100">
          <div className="flex gap-x-4">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={item.completed ? true : false}
              onChange={() => dispatch(toggleTodo(item.id))}
            />
            <ul>
              <li className={`${item.completed && 'line-through'} capitalize`}>{item.name}</li>
            </ul>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
            ></div>

            <div className="h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
            ></div>

            <div className="h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
            ></div>
            <button
              onClick={() => dispatch(deleteTodo(item.id))}
              className="btn bg-red-600 text-white px-1.5 py-0.25 rounded-sm"
            >
              X
            </button>
          </div>
        </div>
        <hr />
      </>
    )

  )

  return (
    <div>
      {/* <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src="./images/double-tick.png"
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul> */}

      {/* todos */}
      <div
        className="w-1/2 block mx-auto mt-2 text-gray-700 max-h-72 overflow-y-auto"
      >
        {/* todo item */}
        {items}          

        {/* <div
          className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 bg-green-500"
        ></div>

        <div
          className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500"
        ></div>

        <div
          className="flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500"
        ></div> */}
      </div>
    </div>
  )
}