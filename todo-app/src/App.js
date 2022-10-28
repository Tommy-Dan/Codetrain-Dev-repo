import './App.css';
import React, { useState, useEffect } from 'react';
import {TextField , Button } from '@mui/material';
import Todo from './components/Todos';
import { db } from './firebase/firebase';
import { collection , query, orderBy , onSnapshot, addDoc, 
         serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';



const q = query(collection(db,'todos'), orderBy('timestamp','desc'));

function App() {
  const [todos, setTodos] = useState([
    // 'Create react app',
    // 'Create firebase database'
    ]);
    const [input, setInput] = useState('');
    const [edit, setEdit] = useState(false);

    useEffect(() => {
      onSnapshot(q,(snapshot)=>{
        setTodos(snapshot.docs.map(doc=>({
        id: doc.id,
        item: doc.data()
        })))
        })},[input]);

    const addTodo = (e) => {
      e.preventDefault();

      addDoc(collection(db,'todos'),{
        todo: input,
        timestamp: serverTimestamp()
      })
        setInput('');
    };

    return (
    <div className="App">
      <h1> TODO List</h1>
      <form>
      <TextField id ="outlined-basic" label = "Make Todo" variant = "outlined" 
           style = {{margin:"0px 5px"}} size = "small" value = {input}
           onChange = { e => setInput( e.target.value) } 
      />

      <Button variant = "contained" color = "primary" onClick = {addTodo}>Add Todo</Button>
      </form>
      <ul>
      {todos.map(item => <Todo key={item.id} arr = {item} />)}
      </ul>
    </div>
    );
}

export default App;
