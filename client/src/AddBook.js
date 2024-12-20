import { useState } from "react";

function AddBook(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    return (
        <>
        <input 
        type="text"
        placeholder="title"
        onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input 
        type="text"
        placeholder="author"
        onChange={(event) => {
            setAuthor(event.target.value);
          }}
         />
        <p>Add book not implemented yet!</p>
        </>
    );
};

export {AddBook};