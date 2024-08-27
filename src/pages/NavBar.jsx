import { Link } from "react-scroll";

const NavBar = () => {

  // const content=
  // <>
  // <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition">
  //     <ul className="text-center text-xl p-20">
  //         <Link  to="Home">
  //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
  //         </Link>
  //         <Link  to="About">
  //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
  //         </Link>
  //         <Link  to="LibriLetti">
  //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Libri Letti</li>
  //         </Link>
  //         <Link to="LaMiaLista">
  //             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">La Mia Lista</li>
  //         </Link>
  //     </ul>
  // </div>
  // </> 
  return (
    <nav className="flex flex-row space-x-7 px-2
    justify-between text-white items-center ">
          <div className="flex items-center flex-1 cursor-pointer">
                <h1 className="text-white text-[24px]">Bookly</h1>
          </div>
          <div className="">
                    <ul className="flex gap-5">
                        <Link to="Home">
                            <li className="cursor-pointer">Home</li>
                        </Link>
                        <Link to="About">
                            <li className="cursor-pointer">About</li>
                        </Link>
                        <Link to="LibriLetti">
                            <li className="cursor-pointer">Libri Letti</li>
                        </Link>
                        <Link to="LaMiaLista">
                            <li className="cursor-pointer">La Mia Lista</li>
                        </Link>
                    </ul>
                </div>
              <div>
                {/* {content} */}
              </div>
    </nav>
  )
}

export default NavBar