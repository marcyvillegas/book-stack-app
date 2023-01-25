import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import BookDetails from "./components/books/BookDetails";
import LogIn from "./components/auth/LogIn";
import SignUp from "./components/auth/SignUp";
import AddBook from "./components/books/AddBook";

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/book-review/:id" element={<BookDetails />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-book" element={<AddBook />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
