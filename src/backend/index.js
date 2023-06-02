import express from "express"
import mysql from "mysql"
import cors from 'cors'
import axios from 'axios'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root12.34",
    database:"library3"
})
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.get("/",(req,res)=>{
    res.json("hello this is the backend")
})

// -------------------------------------------------------------- BOOKS ----------------------------------------------------------------------------------

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.get("/booksFullInfo", (req,res) => {
    const q = "SELECT * FROM library3.view_book_full_info_concated;"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/booksFullInfo/:id", (req,res) => {
    const bookID = req.params.id;
    const q = "SELECT * FROM library3.view_book_full_info where BookID = ?;"
    db.query(q, [bookID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/getMTM_BAID/:id", (req,res) => {
    const q = "SELECT * FROM library3.mtm_books_authors where BooID = ?"
    const bookID = req.params.id;

    db.query(q,[bookID],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/getMTM_BGID/:id", (req,res) => {
    const q = "SELECT * FROM library3.mtm_books_genres where BooID = ?"
    const bookID = req.params.id;

    db.query(q,[bookID],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id", (req,res) => {
    const bookID = req.params.id;
    const q = "Delete from books where BooID = ?"

    db.query(q, [bookID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Bok deleted successfully")
    })
})

app.put("/books/:id", (req,res)=>{
    const bookID = req.params.id;
    const q = "Update books set Title = ?, Description = ?, Quantity = ?, PublicationYear = ?, Price = ? WHERE BooID = ?"

    const values = [req.body.Title, req.body.Description, req.body.Quantity, req.body.PublicationYear, req.body.Price]

    db.query(q, [...values, bookID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Bok deleted successfully")
    })
})

app.post("/books", (req,res) => {
    const q = "INSERT INTO books (Title, Description, Quantity, PublicationDate, Price) VALUES (?)"
    const values = [req.body.Title, req.body.Description, req.body.Quantity, req.body.PublicationDate, req.body.Price]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book created succesfully")
    })
})

app.post("/booksWithRel", (req,res) => {
    const q = "call library3.proc_create_book_with_relations(?) "
    const values = [req.body.b_title, req.body.b_descriprion, req.body.b_quantity, req.body.b_PublicationYear, req.body.b_Price, req.body.a_authorID, req.body.g_genres]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book created succesfully")
    })
})

app.put("/addAuthorToBook", (req, res) => {
    const q = "call library3.proc_add_author_to_book(?)"
    const values = [req.body.bookId, req.body.selected]

    db.query(q,[ values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book created succesfully")
    })
})

app.put("/addGenresToBook", (req, res) => {
    const q = "call library3.proc_add_genre_to_book(?)"
    const values = [req.body.bookId, req.body.selected]

    db.query(q,[ values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Book created succesfully")
    })
})

app.delete("/deleteLinkBookAuthor/:id", (req,res) => {
    const q = "delete from mtm_books_authors where MTM_BAID = ?; "
    const MTM_BAID = req.params.id;

    db.query(q, [MTM_BAID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Link deleted successfully")
    })
})

app.delete("/deleteLinkBookGenre/:id", (req,res) => {
    const q = "delete from mtm_books_genres where MTM_BGID = ?; "
    const MTM_BGID = req.params.id;

    db.query(q, [MTM_BGID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Link deleted successfully")
    })
})

app.get("/books/:id", (req,res) => {
    const bookID = req.params.id;
    const q = "select * from books where BooID= ?";

    db.query(q, [bookID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// -------------------------------------------------------------- AUTHORS ----------------------------------------------------------------------------------

app.get("/authors", (req,res) => {
    const q = "SELECT * FROM authors"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/authors/:id", (req,res)=>{
    const authorID = req.params.id;
    const q = "Delete from authors where AuthID = ?"

    db.query(q, [authorID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Author deleted successfully")
    })
})

app.put("/authors/:id", (req,res)=>{
    const authID = req.params.id;
    const q = "Update authors set FirstName = ?, SecondName = ?, LastName = ?, NickName = ? where AuthID = ?"

    const values = [req.body.FirstName, req.body.SecondName, req.body.LastName, req.body.NickName]

    db.query(q, [...values, authID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Author updated successfully")
    })
})

app.post("/authors", (req,res) => {
    const q = "INSERT INTO authors (FirstName, SecondName, LastName, NickName) VALUES (?)"
    const values = [req.body.FirstName, req.body.SecondName, req.body.LastName, req.body.NickName]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Author created succesfully")
    })
})

app.get("/authors/:id", (req,res) => {
    const authorsID = req.params.id;
    const q = "select * from authors where AuthID = ?";

    db.query(q, [authorsID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// ------------------------------------------------------------------------ GENRES -------------------------------------
app.get("/genres", (req,res) => {
    const q = "SELECT * FROM genres"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/genres/:id", (req,res)=>{
    const genID = req.params.id;
    const q = "Delete from genres where GenID = ?"

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Genres deleted successfully")
    })
})

app.put("/genres/:id", (req,res)=>{
    const genID = req.params.id;
    const q = "Update genres set GenParentID = ?, Name = ? where GenID = ?"

    const values = [req.body.GenParentID, req.body.Name]

    db.query(q, [...values, genID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Genres updated successfully")
    })
})

app.post("/genres", (req,res) => {
    const q = "INSERT INTO genres (GenParentID, Name) VALUES (?)"
    const values = [req.body.GenParentID, req.body.Name]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Genres created succesfully")
    })
})

app.get("/genres/:id", (req,res) => {
    const genID = req.params.id;
    const q = "select * from genres where GenID = ?";

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// ------------------------------------------------------------------------ USERS -------------------------------------------------------------------------
app.get("/users", (req,res) => {
    const q = "SELECT * FROM borrowers"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/borrowers/:id", (req,res)=>{
    const genID = req.params.id;
    const q = "Delete from borrowers where BorID = ?"

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Borrower deleted successfully")
    })
})

app.put("/borrowers/:id", (req,res)=>{
    const genID = req.params.id;
    const q = "Update borrowers set FirstName = ?, SecondName = ?, LastName = ?, email = ? where BorID = ?"

    const values = [req.body.FirstName, req.body.SecondName, req.body.LastName, req.body.email]

    db.query(q, [...values, genID], (err,data) => {
        if(err) return res.json(err)
        return res.json("Borrower updated successfully")
    })
})

app.post("/borrowers", (req,res) => {
    const q = "INSERT INTO borrowers (FirstName, SecondName, LastName, email) VALUES (?)"
    const values = [req.body.FirstName, req.body.SecondName, req.body.LastName, req.body.email]

    db.query(q,[values], (err,data) => {
        if(err) return res.json(err)
        return res.json("Genres created succesfully")
    })
})

app.get("/borrowers/:id", (req,res) => {
    const genID = req.params.id;
    const q = "select * from borrowers where BorID = ?";

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// -------------------------------------------------------------------- BORROWED BOOKS --------------------------------------------------------------------

app.get("/borrowedBooks", (req,res) => {
    const q = "SELECT * FROM library3.view_borrowers_with_books"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/addBorrowedBooks", (req,res) => {
    const q = "call library3.proc_add_borrowing_or_reservation_to_book(?)"
    const values = [req.body.BorrowerID, req.body.BookID, req.body.BorrowNumberOfBooks, req.body.BorrowNumberOfDays]

    db.query(q, [values], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/deleteBorrowedBooks/:id", (req,res) => {
    const q = "delete from mtm_books_borrowers where MTM_BBID = ?"
    const genID = req.params.id;

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


// ------------------------------------------------------------------- RESERVATIONS -------------------------------------------------------------------------
app.get("/reservations", (req,res) => {
    const q = "SELECT * FROM view_reservationlist"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/reservations/:id", (req,res) => {
    const genID = req.params.id;
    const q = "select * from view_reservationlist where BRID = ?";

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/addReservation", (req,res) => {
    const q = "insert into book_reservations (BooID, BorID, NumberOfBooks) values (?);"
    const values = [req.body.BooID, req.body.BorID, req.body.NumberOfBooks]

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})




app.delete("/deleteReservation/:id", (req,res) => {
    const q = "delete from book_reservations where BRID = ?"
    const genID = req.params.id;

    db.query(q, [genID], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put("/updateReservation/:id", (req,res) => {
    const q = "update book_reservations set BooID=?, BorId=?, NumberOfBooks=? where BRID = ?"
    const values = [req.body.BooID, req.body.BorID, req.body.NumberOfBooks]
    const id = req.params.id;

    db.query(q, [...values, id], (err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// ------------------------------------------------------------------------- PAYMENTS ---------------------------------------------------------------------

app.get("/payments", (req,res) => {
    const q = "SELECT * FROM library3.view_logs_info;"
    db.query(q,(err,data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

// ------------------------------------------------------------------------- BACKEND ----------------------------------------------------------------------

app.listen(8800, ()=>{
    console.log("Connected to backend")
})