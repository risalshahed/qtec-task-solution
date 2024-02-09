import { useReducer } from "react"
import { filterReducer } from "../utils/reducers/filters/filterReducer"
import { initialFilterState } from "../utils/initialState/filters/initialFilterState"

export default function Filter() {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <section className="w-5/6 sm:w-3/4 md:w-1/2 flex mx-auto justify-between items-center pt-8">
      <div className="flex gap-x-4">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md">All</button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Incomplete</button>
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Completed</button>
      </div>

      <div>
        <div className="flex items-center gap-x-2">
          <div className="h-4 w-4 rounded-full border-2 cursor-pointer border-green-500 hover:bg-green-500"
          ></div>
          <h3 className="font-semibold text-xl">Low</h3>

        </div>

        <div className="flex items-center gap-x-2">
          <div className="h-4 w-4 rounded-full border-2 cursor-pointer border-yellow-500 hover:bg-yellow-500"
          ></div>
          <h3 className="font-semibold text-xl">Medium</h3>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="h-4 w-4 rounded-full border-2 cursor-pointer border-red-500 hover:bg-red-500"
          ></div>
          <h3 className="font-semibold text-xl">High</h3>
        </div>
      </div>

    </section>
  )
}
