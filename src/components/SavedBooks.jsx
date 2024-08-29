import { useEffect, useState } from "react";
import NavBar from "../pages/NavBar";
import { CiBookmarkRemove } from "react-icons/ci";

export default function SavedBooks(){

  const [books, setBooks] = useState([]);

   const removeBooks = (bookId) =>{
       const savedBooks =JSON.parse(localStorage.getItem("savedBooks")) || [];
       const updatedBooks = savedBooks.filter(book => book.id !== bookId);
       localStorage.setItem("savedBooks",JSON.stringify(updatedBooks))
       setBooks(updatedBooks);
   }
  const handleRemove = (id) => {
    removeBooks(id);
    setBooks(prevList => prevList.filter(book => book.id !== id));
  };
  useEffect(() => {
    const fetchSavedBooks = () => {
      const savedBooks = JSON.parse(localStorage.getItem("savedBooks")) || [];
      setBooks(savedBooks);
    };
    fetchSavedBooks();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-700 overflow-x-hidden">
    <NavBar/>
    <div className="container mx-auto my-4 text-white">
      <h1 className="text-3xl font-bold text-center mb-4">Saved Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-35 gap-10">
        {books.map((book) => (
          <div key={book.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src={book.img} alt={book.title} className="w-full h-auto object-cover rounded-xl" />
            <h2 className="text-xl font-semibold mt-2">{book.title}</h2>
            <p className="text-gray-400">{book.publisher}</p>
            <button onClick={() => handleRemove(book.id)}>
              <CiBookmarkRemove/>
            </button>
          </div>
        ))}
       
      </div>
    </div>
  </div>
  );
}