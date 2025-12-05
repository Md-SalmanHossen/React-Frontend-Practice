

const App = () => {
  return (
    <div className="h-screen bg-white text-black">
      <div>
        <form className="flex items-start justify-between gap-4 p-10 ">
          <div className="flex flex-col w-1/2 items-start">
            <input
              type="text"
              placeholder="EnterNotes  Heading"
              className="px-5 py-2 w-full border-2 rounded" />
            <input
              type="text"
              placeholder="Enter details"
              className="px-5 h-20 py-2 border-2 w-full rounded" />
            <button className="cursor-pointer w-full bg-black px-5 py-2 rounded text-white ">Add note</button>
          </div>

          <img
          className="h-60"
           src="https://img.lovepik.com/free-png/20210923/lovepik-simple-note-paper-png-image_401193838_wh1200.png" alt="" />
        </form>
      </div>

    </div>
  )
}

export default App
