import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
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