import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row space-x-7 px-2
    justify-between text-white items-center ">
          <div className="flex items-center flex-1 cursor-pointer">
                <h1 className="text-white text-[24px]">Bookly</h1>
          </div>
          <div>
                    <ul className="flex gap-5">
                        <Link to={`/`}>
                            <li className="cursor-pointer">Home</li>
                        </Link>
                        <Link to="">
                            <li className="cursor-pointer">About</li>
                        </Link>
                        <Link to={`/books`}>
                            <li className="cursor-pointer">Trova Libri</li>
                        </Link>
                        <Link to={`/SavedBooks`}>
                            <li className="cursor-pointer">La Mia Lista</li>
                        </Link>
                    </ul>
                </div>
              <div>
            </div>
    </nav>
  )
}