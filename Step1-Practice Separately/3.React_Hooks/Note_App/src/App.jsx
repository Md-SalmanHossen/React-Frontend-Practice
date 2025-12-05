import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen text-black p-10">

      {/* -------- FORM -------- */}
      <div className="bg-white rounded-xl">
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
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Enter details"
              className="px-5 py-3 font-medium h-32 outline-none border-2 w-full rounded-lg resize-none"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <button className="w-full cursor-pointer bg-black hover:bg-gray-800 transition px-5 py-3 rounded-lg text-white font-semibold">
              Add Notes
            </button>
          </div>
        </form>
      </div>

      {/* -------- RECENT NOTES -------- */}
      <h1 className="text-3xl font-bold my-6">Recent Notes</h1>

      <div className="flex gap-5 flex-wrap max-h-[500px] overflow-auto">

        {task.map((elm, idx) => {
          return (
            <div
              key={idx}
              className="relative h-56 w-44 rounded-2xl shadow-lg p-4 bg-cover bg-center flex flex-col justify-between text-black"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')",
              }}
            >
              {/* ❌ Delete Button */}
              <button
                onClick={() => deleteNote(idx)}
                className="absolute cursor-pointer top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                X
              </button>

              <div>
                <h3 className="leading-tight text-lg font-bold">
                  {elm.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-700 max-h-[80px] overflow-auto">
                  {elm.details}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default App;
