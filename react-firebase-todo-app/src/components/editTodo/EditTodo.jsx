import {useState} from 'react'
import Modal from '../modal/Modal';
import './EditTodo.css';
import { doc, updateDoc } from 'firebase/firestore';
import {db} from '../firebase/FirebaseConfig';


const EditTodo = ({open, onClose, toEditTask, id}) => {
    const [task, setTask] = useState(toEditTask)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const todoDocRef = doc(db, 'todos', id)
    try{
        await updateDoc(todoDocRef, {
            task: task
        })
        onClose()
    }catch (err) {
        alert(err)
    }
  }

  return (
    <Modal modalLable='Edit Todo' onClose={onClose} open={open}>
        <form onSubmit={handleUpdate} className='editTodo'>
            <input type='text' name='task' onChange={(e) => setTask(e.target.value)} value={task}/>
            <button type='submit'>Edit</button>
        </form>
    </Modal>

  )
}

export default EditTodo;