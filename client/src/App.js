
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import { AllBooks } from './AllBooks';
import { OneBook } from './OneBook';
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <p>Hello world</p>
      <AllBooks />
      <OneBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;
