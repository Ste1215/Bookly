import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//  import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
// import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';
import NotFoundPage from './pages/NotFoundPage';
import BookDetail from './components/BookDetail';
// import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFoundPage/>,
  },
  {
    path: "/books",
    element: <BookSearch/>
  },
  {
    path: "/books/:id",
    element: <BookDetail/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} /> 
  </StrictMode>,
)
