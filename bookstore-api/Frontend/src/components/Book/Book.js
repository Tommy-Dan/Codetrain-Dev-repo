import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";



const Book = (props) => {
  const history = useNavigate();
  const { _id, title, author, description, price,date, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:4000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <article>By {author}</article>
      <h3>{title}</h3>
      <p>{description}</p>
      <h3>GH₵ {price}</h3>
      <p>{date}</p>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "5" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
