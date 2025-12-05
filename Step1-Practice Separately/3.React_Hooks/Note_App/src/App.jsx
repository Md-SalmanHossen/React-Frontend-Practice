const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className=" bg-gray-100 text-black">

      <div className="w-full bg-white rounded-2xl p-8">

        <form 
          onSubmit={submitHandler} 
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >

          <div className="flex gap-4 flex-col w-full md:w-1/2">
            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="px-5 py-3 font-medium w-full outline-none border-2 rounded-lg"
            />

            <textarea
              placeholder="Enter details"
              className="px-5 py-3 font-medium h-32 outline-none border-2 w-full rounded-lg resize-none"
            />

            <button 
              className="cursor-pointer w-full bg-black hover:bg-gray-800 transition px-5 py-3 rounded-lg text-white font-semibold"
            >
              Add Notes
            </button>
          </div>

          <img
            className="h-48 object-contain"
            src="https://cdn.pixabay.com/photo/2017/03/18/17/46/notepad-2154581_640.png"
            alt="notepad"
          />

        </form>

        <div className="mt-12">
          <h1 className="text-3xl font-bold mb-5">Recent Notes</h1>

          <div className="flex gap-5 flex-wrap">
            <div className="h-52 w-40 rounded-2xl bg-black text-white p-4 shadow-md">
              Note 1
            </div>

            <div className="h-52 w-40 rounded-2xl bg-black text-white p-4 shadow-md">
              Note 2
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
