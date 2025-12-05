
import { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask=[...task];
    copyTask.push({title,details});
    setTask(copyTask);
    

    setTitle("");
    setDetails("");
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
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />

            <textarea
              placeholder="Enter details"
              className="px-5 py-3 font-medium h-32 outline-none border-2 w-full rounded-lg resize-none"
              value={details}
              onChange={(e)=>{
                setDetails(e.target.value)
              }}
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

          <div className="flex gap-5 flex-wrap overflow-auto">
            {
              task.map(function(elm,idx){
                return <div key={idx} className="h-52 w-40 rounded-2xl bg-black text-white">
                  <h3 className="p-4 leading-tight text-xl font">{elm.title}</h3>
                  <p className="px-4 font-medium text-gray-200 py-2 ">{elm.details}</p>
                </div>
              })
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
