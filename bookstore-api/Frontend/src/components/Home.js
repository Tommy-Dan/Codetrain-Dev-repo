// import { Button, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import "./Book/Book.css";
import axios from "axios";
import Book from "./Book/Book";
const URL = "http://localhost:4000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Home = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <div>
      <ul>
        {books && books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  )
};

export default Home;
