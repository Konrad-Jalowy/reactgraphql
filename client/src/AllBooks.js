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
  const { data, loading, refetch } = useQuery(QUERY_ALL_BOOKS);
  if (loading) {
    return <h1> DATA IS LOADING...</h1>;
  }
    return (
        <>
        <p>Not implemented yet(allbooks rfc)</p>
        </>
    );
};

export {AllBooks};