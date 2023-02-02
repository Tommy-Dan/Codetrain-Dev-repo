import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:4000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const putRequest = async () => {
    await axios
      .put(`http://localhost:4000/books/${id}`, {
        title: String(inputs.title),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        date: String(inputs.date),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putRequest().then(() => history("/books"));
  };
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,[e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <TextField
              id="outlined-required"
              label="Title"
              value={inputs.title}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="title"
            />
            <TextField
              id="outlined-required"
              label="Author"
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="author"
            />
            <TextField
              id="outlined-required"
              label="Description"
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="description"
            />
            <TextField
              id="outlined-required"
              label="Price"
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="price"
            />
            <TextField
              id="outlined-required"
              label="Date"
              value={inputs.date}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="date"
            />
            <TextField
              id="outlined-required"
              label="Image"
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              defaultValue="Small"
              size="small"
              name="image"
            />
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
