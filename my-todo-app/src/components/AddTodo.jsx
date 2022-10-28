import React from 'react';
import {TextField , Button } from '@mui/material';




const AddTodo = ({
    submitHandler,
    input,
    setInput,
}) => {
  return (
    <>
      <h1> TODO List</h1>
      <form>
        <TextField id ="outlined-basic" label = "Make Todo" variant = "outlined" 
             style = {{margin:"0px 5px"}} size = "small" value = {input}
             onChange = { e => setInput( e.target.value) } 
        />
        <Button variant = "contained" color = "primary" onClick = {submitHandler}>
            Add Todo
        </Button>
      </form>
    </>
  )
}

export default AddTodo;