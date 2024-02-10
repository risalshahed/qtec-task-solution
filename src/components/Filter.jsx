import { useContext } from "react"
import { FilterContext } from "../App"
import { colorChanged, statusChanged } from "../utils/actions/filters/actions";

export default function Filter() {
  // const todoContext = useContext(TodoContext);
  const filterContext = useContext(FilterContext);

  // const { state, dispatch } = filterContext;

  // states
  // const todos = todoContext.state;
  const filters = filterContext.state;
  // dispatches
  // const todoDispatch = todoContext.dispatch;
  const filterDispatch = filterContext.dispatch;

  // console.log('todos', todos);
  // console.log('filters', filters);

  // destructure filters
  const {colors, status} = filters;
  console.log(colors);  // will return empty array according to initialState

  const handleStatusChange = status => {
    filterDispatch(statusChanged(status));
  }

  // color 'add' OR 'remove' krbo; 'add' thakle 'remove' & vice versa
  const handleColorChange = color => {
    // "filterReducer.js" a, changeType er case ('added', 'removed') dekhe check krte hbe, color ase ki na, thakle 'add' krbo else 'remove' krbo
    if (colors.includes(color)) {
      filterDispatch(colorChanged(color, 'removed'));
      
    } else {
      filterDispatch(colorChanged(color, 'added'));
    }
  }

  return (
    <section className="flex flex-col sm:flex-row mx-auto gap-y-3 justify-between items-center pt-8">
      <div className="flex gap-x-2 sm:gap-x-4">
        <button
          onClick={() => handleStatusChange('All')}
          className={`text-white px-3 sm:px-4 py-2 rounded-md ${status === 'All' ? 'font-bold bg-blue-700' : 'bg-blue-600'}`}
        >
          All
        </button>
        <button
          onClick={() => handleStatusChange('Incomplete')}
          className={`text-white px-3 sm:px-4 py-2 rounded-md ${status === 'Incomplete' ? 'font-bold bg-blue-700' : 'bg-blue-600'}`}
        >
          Incomplete</button>
        <button
          onClick={() => handleStatusChange('Completed')}
          className={`text-white px-3 sm:px-4 py-2 rounded-md ${status === 'Completed' ? 'font-bold bg-blue-700' : 'bg-blue-600'}`}
        >
          Completed
        </button>
      </div>

      <div>
        <div className="flex items-center gap-x-2">
          <div
            className={`h-4 w-4 rounded-full border-2 cursor-pointer border-green-500 hover:bg-green-500 ${colors.includes('green') && 'bg-green-500'}`}
            onClick={() => handleColorChange('green')}
          ></div>
          <h3 className="font-semibold text-xl">Low</h3>
        </div>

        <div className="flex items-center gap-x-2">
          <div className={`h-4 w-4 rounded-full border-2 cursor-pointer border-yellow-500 hover:bg-yellow-500 ${colors.includes('yellow') && 'bg-yellow-500'}`}
          onClick={() => handleColorChange('yellow')}
          ></div>
          <h3 className="font-semibold text-xl">Medium</h3>
        </div>

        <div className="flex items-center gap-x-2">
          <div className={`h-4 w-4 rounded-full border-2 cursor-pointer border-red-500 hover:bg-red-500 ${colors.includes('red') && 'bg-red-500'}`}
          onClick={() => handleColorChange('red')}
          ></div>
          <h3 className="font-semibold text-xl">High</h3>
        </div>
      </div>
    </section>
  )
}