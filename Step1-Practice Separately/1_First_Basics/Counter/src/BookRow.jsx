import BookDetails from "./BookDetails";
import BookFeature from "./BookFeature";


function BookRow({book}){
   return(
      <div>
         <BookDetails title={book.title} author={book.author}/>
         <BookFeature/>
      </div>
   )
}
export default BookRow; 