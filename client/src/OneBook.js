import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
function OneBook(){
    const [movieSearched, setMovieSearched] = useState(1);
    console.log(movieSearched);
    return (
        <>
        <input type="number" value={movieSearched} onChange={(e) => {
            setMovieSearched(e.target.value);
        }} />
        <p>Not implemented yet(onebook)</p>
        </>
    );
};

export {OneBook};