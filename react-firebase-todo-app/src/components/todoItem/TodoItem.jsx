import './TodoItem.css'
import Modal from '../modal/Modal';



const TodoItem = ({onClose, open, task}) => {
  return (
    <Modal modalLabel='Todo Item' onClose={onClose} open={open}>
        <div className='taskItem'>
            <p>{task}</p>
        </div>

    </Modal>
  )
}

export default TodoItem;
