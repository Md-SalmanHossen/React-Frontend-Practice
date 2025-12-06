import React from 'react'

const App = () => {
  //create 
  localStorage.setItem('user','salman');
  localStorage.setItem('age',18);

  //get item
  const user=localStorage.getItem('user');
  const age=localStorage.getItem('age');
  console.log(user,age);
  
  //remove 
  localStorage.removeItem('age');
  
  return (
    <div>
      <h1 className='text-center font-bold text-4xl p-4'>Practice Local storage</h1>
    </div>
  )
}

export default App
