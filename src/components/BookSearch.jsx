import { useState } from "react"
import {Link} from "react-router-dom"
import { Blocks } from "react-loader-spinner";
import NavBar from './../pages/NavBar';

const BookSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchBooks = async () => {
        setLoading(true);
        setError(null); 
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setBooks(data.items || []); 
        } catch (error) {
          console.error("Errore durante la ricerca dei libri:", error);
          setError("Errore durante la ricerca dei libri. Per favore riprova.");
        }
        setLoading(false);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        searchBooks();
      };
      const booksWithImages = books.filter(book => book.volumeInfo.imageLinks?.thumbnail);
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col justify-center text-white font-[400]">
      <NavBar/>
       <div className="container text-white h-full">
       <div className="text-center mb-5">
          <h1 className="text-5xl font-bold mt-10 mb-3">Find the perfect book for you</h1>
          <p className="text-lg text-gray-300">Cerca tra milioni di titoli disponibili e trova il libro giusto per te!</p>
        </div>
            <form onSubmit={handleSubmit} className="flex justify-center mb-10">
                <input
                type="text"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                className="border-2 border-gray-300 text-black  rounded-md p-2 w-80"
                placeholder="Cerca un libro..."
                />
                <button
                type="submit"
                className="p-3 border-2 rounded-xl border-blue-500 hover:border-blue-800 transition-all duration-200 text-white px-4 py-2 ml-2"
                >
                Cerca
                </button>
            </form>
            <div className="flex flex-col items-center justify-center">
            {error && <p className="text-red-500">{error}</p>}
            {loading && 
                    <Blocks
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        visible={true}/>
            }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20 p-5 mb-20 justify-center items-center ">
                {booksWithImages?.map((book) => (
                <Link to={`/books/${book.id}`} key={book.id} className="bg-transparent flex flex-col items-center w-full max-w-[300px] mx-auto rounded-xl shadow-md">
                    {
                    book.volumeInfo.imageLinks?.thumbnail &&
                        ( <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                            className="min-sm:w-full w-full m-0 min-h-fit justify-center flex items-center rounded-xl transition duration-300 ease-in-out hover:scale-110"
                        />
                        ) 
                    }
                    <h3 className="text-[15px] text-center font-semibold mt-2">
                    {book.volumeInfo.title.length > 40 ? `${book.volumeInfo.title.slice(0, 40)}...` : book.volumeInfo.title}
                    </h3>
                    <p className="text-[10px] text-center font-[100] mt-2">{book.volumeInfo.authors?.join(", ")}
                    </p>
                </Link>
                ))}
            </div>
            </div>
    </div>
       
  )
}

export default BookSearch