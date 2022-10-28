import './TodoManager.css';
import Todo from '../todo/Todo';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import {db} from '../firebase/FirebaseConfig';
import AddTodo from '../addTodo/AddTodo';


const TodoManager = () => {
    // const [openAddModal, setOpenAddModal] = useState(false);
    const [tasks, setTasks] = useState([]);


/* function to get all tasks from firestore in realtime */ 
useEffect(() => {
    const todoColRef = query(collection(db, 'todos'), orderBy('created', 'desc'))
    onSnapshot(todoColRef, (snapshot) => {
        setTasks(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
    })
},[])

return (
    <div className='todoManager'>
        <header>Todo App</header>
        <div className='todoManager__container'>
            <AddTodo />
            <div className='todoManager__tasks'>
                {tasks.map((todo) =>(
                    <Todo
                      id={todo.id}
                      key={todo.id}
                      completed={todo.data.completed}
                      task={todo.data.task}
                    />
                ))}
            </div>
        </div>
    </div>
)
}

export default TodoManager;