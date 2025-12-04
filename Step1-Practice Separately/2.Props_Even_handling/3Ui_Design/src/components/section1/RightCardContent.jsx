import React from 'react'

const RightCardContent = ({tag,index}) => {
  return (
    <div>
      < div className="absolute top-0 left-0 h-full  w-full  p-8 flex flex-col justify-between">
         <h2 className="bg-white rounded-full  h-10 w-10 flex justify-center items-center font-semibold">{index}</h2>
         <div>
            <p className="text-xl leading-normal text-white mb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident nobis sapiente aspernatur magnam nam tenetur?</p>
            <div className="flex justify-between">
               <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-lg">{tag}</button>
               <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-l"><i className="ri-arrow-right-line"></i></button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default RightCardContent
