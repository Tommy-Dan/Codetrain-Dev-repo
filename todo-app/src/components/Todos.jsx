import React from 'react';
import '../index.css';
import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {db} from '../firebase/firebase';
import { doc, deleteDoc } from "firebase/firestore";

const Todos = ( {arr} ) => {
  return (
    <List className="todo__list">
      <ListItem>
      <ListItemAvatar />
      <ListItemText secondary = {arr.item.todo} />
      </ListItem>
      <EditIcon fontSize = "small" style = {{opacity:0.7}}  />
      <DeleteIcon fontSize = "small" style = {{opacity:0.7}} onClick = {() => {deleteDoc(doc(db, 'todos', arr.id))}} />
    </List>
)
};

export default Todos;