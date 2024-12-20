
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
