import './Todo.css';
import React, { useState } from 'react';
import EditTodo from '../editTodo/EditTodo';
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase/FirebaseConfig';




const Todo = ({id, task, completed}) => {
    const [checked, setChecked] = useState(completed);
    const [open, setOpen] = useState({edit: false});

    const handleClose = () => {
        setOpen({edit: false})
    }

     /* function to update firestore */
    const handleChange = async() => {
        const todoDocRef = doc(db, 'todos', id)
        try{
            await updateDoc(todoDocRef, {
                completed: checked
            })
        }catch (err) {
            alert(err)
        }
    }

     /* function to delete a document from firstore */
     const handleDelete = async () => {
        const todoDocRef = doc(db, 'todos', id)
        try{
            await deleteDoc(todoDocRef)
        } catch (err) {
            alert(err)
        }
     }

     return (
        <div className={`task ${checked && 'task--borderColor'}`}>
            <div>
                <input 
                  id={`checkbox-${id}`}
                  className='checkbox-cutom'
                  name='checkbox'
                  checked={checked}
                  onChange={handleChange}
                  type='checkbox'
                />
                <label
                  htmlFor={`checkbox-${id}`}
                  className='checkbox-custom-label'
                  onClick={() => setChecked(!checked)}>
                </label>
            </div>
            <div className='task__body'>
                <p>{task}</p>
            </div>
            <div className='task__buttons'>
                <div className='task__deleteNedit'>
                    <button
                      className='task__editButton'
                      onClick={() => setOpen({...open, edit: true})}>
                      Edit
                    </button>
                    <button className='task__deleteButton' onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
            {open.edit && 
             <EditTodo onClose={handleClose}
              toEditTask={task}
              open={open.edit}
              id={id} />
            }
        </div>
     )
}

export default Todo;