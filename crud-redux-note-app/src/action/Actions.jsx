
export const AddNote =(newNote)=>{
    return{
      type:"ADD_NOTE",
      payload:newNote
    }
  
  }
  export const EditNote =(note)=>{
    return{
      type:"EDIT_NOTE",
      payload:note
    }
  
  }
  export const DeleteNote =(id)=>{
    return{
      type:"DELETE_NOTE",
      payload:id
    }
  
  }