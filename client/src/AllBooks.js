import { useQuery, gql} from "@apollo/client";
const QUERY_ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      id
      title 
      author
    }
  }
`;
function AllBooks(){
    return (
        <>
        <p>Not implemented yet(allbooks rfc)</p>
        </>
    );
};

export {AllBooks};