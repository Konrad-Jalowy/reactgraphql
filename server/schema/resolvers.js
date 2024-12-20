const Books = require("../data/books");

const resolvers = {
    Query: {
      books: () => {
        return Books.getAllBooks();
      },
      book: (_, args) => {
        return Books.getBookById(args.id)
      }
    },
    Mutation: {
        addNewBook: (_, args) => {
            return Books.addNewBook(args.title, args.author);
          },
    }
  };

module.exports = resolvers;