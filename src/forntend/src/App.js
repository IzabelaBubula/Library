import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css"

import Books from "./pages/Books/Books";
import Add from "./pages/Books/Add";
import Update from "./pages/Books/Update";
import Menu from "./pages/Menu";
import Authors from "./pages/Authors/Authors";
import AddAuthor from "./pages/Authors/AddAuthor";
import UpdateAuthor from "./pages/Authors/UpdateAuthor";
import Genres from "./pages/Genres/Genres";
import AddGenres from "./pages/Genres/AddGenres";
import UpdateGenres from "./pages/Genres/UpdateGenres";
import Users from "./pages/Borrowers/Users";
import UpdateBorrower from "./pages/Borrowers/UpdateBorrower";
import AddBorrower from "./pages/Borrowers/AddBorrower";
import Reservations from "./pages/Reservations/Reservations";
import BorrowedBooks from "./pages/BorrowBook/BorrowedBooks";
import BorrowBook from "./pages/BorrowBook/BorrowBook";
import Payments from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/>

          <Route path="/books" element={<Books/>}/>
          <Route path="/addBook" element={<Add/>}/>
          <Route path="/updateBook/:id" element={<Update/>}/>

          <Route path="/authors" element={<Authors/>}/>
          <Route path="/addAuthor" element={<AddAuthor/>}/>
          <Route path="/updateAuthor/:id" element={<UpdateAuthor/>}/>

          <Route path="/genres" element={<Genres/>}/>
          <Route path="/addGenres" element={<AddGenres/>}/>
          <Route path="/updateGenres/:id" element={<UpdateGenres/>}/>

          <Route path="/users" element={<Users/>}/>
          <Route path="/addBorrower" element={<AddBorrower/>}/>
          <Route path="/updateBorrowers/:id" element={<UpdateBorrower/>}/>

          <Route path="/borrowedBooks" element={<BorrowedBooks/>}/>
          <Route path="/borrowBook" element={<BorrowBook/>}/>

          <Route path="/reservations" element={<Reservations/>}/>

          <Route path="/payments" element={<Payments/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;