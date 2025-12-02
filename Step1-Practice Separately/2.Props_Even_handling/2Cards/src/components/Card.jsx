
const Card = (props) => {
   console.log(props);
   
  return (
    <div >
      <div className="text-center w-65 h-80 text-white bg-black p-10 border-2 rounded-lg shadow-xl">
        <img 
          className="rounded-full w-24 h-24 mx-auto mb-4 object-cover" 
          src={props.img}
          alt="Profile Picture" 
        />
        <h1 className="font-bold text-2xl">{props.user},{props.age}</h1>
        <p className="text-sm gap-y-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, molestiae.</p>
        <button className="border p-2 rounded-lg bg-white text-black mt-4 cursor-pointer"> 
          View Profile
        </button>
      </div>
    </div>
  )
}

export default Card
