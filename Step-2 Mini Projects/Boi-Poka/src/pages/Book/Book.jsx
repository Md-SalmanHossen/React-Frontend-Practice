import React from 'react'
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Book = ({ singleBook }) => {
   console.log(singleBook);

   const { bookName, author, image, rating, category } = singleBook;
   return (
      <div >
         <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='m-10 p-3  bg-gray-300'>
               <img
                  className='e-[126px] h-[166px]'
                  src={image}
                  alt="Books" />
            </figure>
            <div className="card-body ">
               <div className='flex gap-10'>
                  <div className="badge badge-success">Young Adult</div>
                  <div className="badge badge-success">Identity</div>
               </div>
               <h2 className="card-title">
                  {singleBook.bookName}
               </h2>
               <p>By: {singleBook.author}</p>
               <div className="card-actions  justify-between">
                  <div className="badge badge-outline cursor-pointer">{singleBook.category}</div>
                  <div className='flex gap-2'>
                     <div className="badge cursor-pointer badge-outline">{singleBook.rating}</div>
                     <div className="badge cursor-pointer badge-outline"><span><FaRegStarHalfStroke /></span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Book
