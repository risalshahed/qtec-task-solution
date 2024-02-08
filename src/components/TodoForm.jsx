export default function TodoForm() {
  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-2 sm:gap-x-4 gap-y-3 justify-center items-center px-4 py-4 rounded-md"
      >
        <input
          type="text"
          placeholder="Add a Tech"
          className="w-5/6 sm:w-3/4 md:w-1/2 text-lg px-4 py-3 border-none outline-none bg-slate-200 text-gray-500 rounded-md"
        />
        <button className="btn bg-blue-600 text-white px-2 rounded-md text-3xl font-semibold pb-1">
          +
        </button>
      </form>
    </div>
  )
}
