import React, { useState,useEffect, Suspense } from 'react'
import Book from '../Book/Book';

const Books = ({data}) => {

   const [allBooks,setAllBook]=useState([]);


  return (
    <div>
      <h1 className='text-center text-4xl  font-bold my-10'>Books</h1>
      <Suspense fallback={<span>Loading....</span>}>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4'>
         {
         data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}/>)
        }
        </div>
      </Suspense>
    </div>
  )
}

export default Books
