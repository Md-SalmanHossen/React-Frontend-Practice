
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users=[
    {
      img:"https://images.unsplash.com/photo-1659128103048-e41477d734a5?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Satisfied",
    },
    {
      img:"https://images.unsplash.com/photo-1718209881006-f6e313e2e109?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Undeserved",
    },
    {
      img:"https://images.unsplash.com/photo-1687934386408-ba56a7dce844?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:"",
      tag:"Underbanked",
    },
  ]
  return (
    <div className=''>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
