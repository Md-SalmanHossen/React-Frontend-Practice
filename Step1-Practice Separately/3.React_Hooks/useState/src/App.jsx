import React,{useState} from 'react'

const App = () => {
   const [Increment, setIncrement] = useState(0);

   const IncrementValue=()=>{
      setIncrement(prevValue => prevValue + 1);
   }
  return (
    <div>
      <h1 className='text-center text-3xl font-bold p-10 my-5'>Practice useState</h1>

      <button onClick={IncrementValue}>Increment</button>
      <h1 className='text-center'>{Increment}</h1>
    </div>
  )
}

export default App