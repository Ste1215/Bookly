import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { Blocks } from "react-loader-spinner";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import NavBar from "../pages/NavBar";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);


  useEffect(() => {
    const fetchBookDetail= async ()=> {

      setLoading(true);
          try{
            const response= await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setBook(data);
          }catch(error){
              console.log("errore nel caricamento dei dettagli del libro,Riprova",error);
          }
          setLoading(false);
    }
    fetchBookDetail();
  },[id]);
  if (loading) return 
                      <Blocks
                      height="80"
                      width="80"
                      color="#4fa94d"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      visible={true}/>
                      ;
  if (error) return <p>{error}</p>;

  return (
    <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-700 overflow-x-hidden">
    <NavBar/>
    <div className="flex lg:flex-row flex-col text-white p-15 lg:p-40 items-center justify-between"> 
      <div className="flex justify-end items-end p-5 min-w-[280px] max-w-[400px]">
            {
          book.volumeInfo.imageLinks?.thumbnail &&
              ( <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="min-sm:w-full w-full m-0 min-h-fit rounded-xl"
              />
              ) 
          }
      </div>
      <div className="flex flex-col items-center justify-center gap-6 p-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-center gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold leading-5">
          {book.volumeInfo.title.length > 50
            ? `${book.volumeInfo.title.slice(0, 50)}...`
            : book.volumeInfo.title}
        </h3>
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300 text-4xl"
          title="Add to List">
          <MdOutlinePlaylistAdd/> 
        </button>
      </div>
      <p className="text-lg text-center font-medium text-gray-300">
        {book.volumeInfo.authors?.join(", ")}
        {book.volumeInfo.publisher && (
          <span className="text-sm block mt-1 text-gray-500">
            {book.volumeInfo.publisher}
          </span>
        )}
      </p>
      <p className="text-base text-justify font-normal text-gray-400 leading-relaxed mt-4">
        {book.volumeInfo.description}
      </p>
      <hr className="w-full border-t border-gray-300 my-6" />
      <div className="flex justify-around w-full text-center">
        <p className="text-sm font-medium text-gray-600">
          Pages: <b className="text-white">{book.volumeInfo.pageCount}</b>
        </p>
        <p className="text-sm font-medium text-gray-600">
          Country: <b className="text-white">{book.saleInfo.country}</b>
        </p>
      </div>
      <a
        href={book.volumeInfo.infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 text-base font-medium hover:underline transition-colors duration-300"
      >
        More Info
      </a>
    </div>

    
    </div>
    </div>
  )
}

export default BookDetail;