import { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
const GET_BOOK_BY_ID = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id,
      title,
      author
    }
  }
`;

function OneBook(){
    const [bookSearched, setBookSearched] = useState(1);
    console.log(bookSearched);
    const [
        fetchBook,
        { data, error, loading },
      ] = useLazyQuery(GET_BOOK_BY_ID);
      useEffect(() => {
        fetchBook({variables: {id: `${bookSearched}`}});
        console.log(data)
      }, [bookSearched, fetchBook]);
      if(loading){
        return <h1>Loading</h1>
      }
      if(error){
        return <h1>Error</h1>
      }
     
      
    return (
        <>
        <input type="number" value={bookSearched} onChange={(e) => {
            setBookSearched(e.target.value);
        }} />
        <p>Book title: {data && data.book && data.book.title}</p>
        </>
    );
};

export {OneBook};