import {Button, TextField} from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";



const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    price: "",
    author: "",
    date: "",
    image: "",
  });

  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState, [e.target.name]: e.target.value,
    }));
  };

  const postRequest = async () => {
    await axios
      .post("http://localhost:4000/books", {
        title: String(inputs.title),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        date: String(inputs.date),
        image: String(inputs.image)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    postRequest().then(() => history("/books"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={5}
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          size="small"
          name="title"
        />
        <TextField
          required
          id="outlined-required"
          label="Author"
          value={inputs.author}
          onChange={handleChange}
          margin="normal"
          size="small"
          name="author"
        />
        <TextField
          required
          id="outlined-required"
          label="Description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          size="small"
          name="description"
        />
        <TextField
          required
          id="outlined-required"
          label="Price"
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          size="small"
          name="price"
        />
        <TextField
          id="outlined-required"
          label="Date"
          value={inputs.date}
          onChange={handleChange}
          margin="normal"
          size="small"
          name="date"
        />
        <TextField
          required
          id="outlined-required"
          label="Image Link"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          name="image"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
