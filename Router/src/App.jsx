
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'
import { Home, Book } from "./Pages/exports"

function App() {

  const books = [
    { id: 1, title: "The Hobbit" },
    { id: 2, title: "The Lord of the Rings" },
    { id: 3, title: "The Silmarillion" },
    { id: 4, title: "The Children of Hurin" },
  ]
  
  let randomBook = books[Math.floor(Math.random() * books.length)];

  return (<>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/book" state={'hi'}>Book</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/" element={<Book />} />
    </Routes>
  </>)
}

export default App
