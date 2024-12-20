import { useState } from "react";
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
    return (
        <>
        <input type="number" value={bookSearched} onChange={(e) => {
            setBookSearched(e.target.value);
        }} />
        <p>Not implemented yet(onebook)</p>
        </>
    );
};

export {OneBook};