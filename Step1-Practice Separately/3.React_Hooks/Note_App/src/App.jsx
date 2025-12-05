

const App = () => {
  return (
    <div className="h-screen bg-white text-black">
      <form className="flex items-start flex-col gap-4 p-10 ">
        <input
         type="text" 
         placeholder="EnterNotes  Heading" 
         className="px-5 py-2 w-1/2 border-2 rounded"/>
        <input
        type="text" 
        placeholder="Enter details" 
        className="px-5 h-20 w-1/2 py-2 border-2 rounded"/>
        <button className="cursor-pointer w-1/2 bg-black px-5 py-2 rounded text-white ">Add note</button>
      </form>
    </div>
  )
} 

export default App
