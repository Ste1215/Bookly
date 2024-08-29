
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import About from './About';
export default function Home () {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <NavBar></NavBar>
    <div className="flex flex-col items-center justify-center text-white w-full h-screen font-[100]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-3">Bookly</h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl ">View All Books Do You Need</h1>
        <div className="mt-4">
          <Link to="/books">
            <button className="p-3 border-2 rounded-xl border-blue-500 hover:border-blue-800 transition-all duration-200">
              Every books is Here.
            </button>
          </Link>
        </div>
    </div>
    <About/>
    </div>
  )
}
