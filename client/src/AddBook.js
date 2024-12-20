import { useState } from "react";
import {gql, useMutation} from "@apollo/client"

const CREATE_BOOK_MUTATION = gql`
  mutation AddNewBookIpt($input: createBookInput!) {
    AddNewBookIpt(input: $input) {
      id
    }
  }
`;
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
         <button>Add</button>
        <p>Add book not implemented yet!</p>
        </>
    );
};

export {AddBook};