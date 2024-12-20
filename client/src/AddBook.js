import { useState } from "react";

function AddBook(){
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    return (
        <>
        <input 
        type="text"
        placeholder="title"
        />
        <input 
        type="text"
        placeholder="author"
         />
        <p>Add book not implemented yet!</p>
        </>
    );
};

export {AddBook};