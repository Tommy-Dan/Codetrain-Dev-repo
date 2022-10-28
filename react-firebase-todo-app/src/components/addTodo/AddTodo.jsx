import { useState } from "react";
import "./AddTodo.css";
import {db} from "../firebase/FirebaseConfig";
import {collection, addDoc, Timestamp} from "firebase/firestore";


const AddTodo = ({onClose, open}) => {

    const [task, setTask] = useState('');

    // function to add new todo to the firebase
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'todos'), {
                task: task,
                completed: false,
                created: Timestamp.now()
            })
            onClose()
        } catch (err) {
            alert(err)
        }
    }
    return(
       <form onSubmit={handleSubmit} className="addTodo" name="addTodo">
          <input
            type='text'
            name='task'
            onChange={(e) =>setTask(e.target.value)}
            value={task}
            placeholder='Enter your todo'
          />
         <button type='submit'>Add Todo</button>
       </form>
    )
}


export default AddTodo;