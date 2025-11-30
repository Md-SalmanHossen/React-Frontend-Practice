
import BookRow from "./BookRow";

const Books = [
   { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", featured: true },
   { id: 2, title: "1984", author: "George Orwell", featured: false },
   { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: true },
   { id: 4, title: "Pride and Prejudice", author: "Jane Austen", featured: false },
   { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", featured: false }
];


function BookList() {
   return (
      <div>
         <ul>
            {
               Books.map((book)=>{
                  <li key={book.id}>
                     <BookRow book={book}/>
                  </li>
               })
            }
         </ul>
      </div>
   )
}
export default BookList;