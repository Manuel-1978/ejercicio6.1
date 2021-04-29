import {useContext, useState} from 'react';
import{GlobalContext} from "../App"
export default function NewTodo() {

 const{setTodos}=useContext(GlobalContext);

const [newTodo,setNewTodo]= useState("")

function handleSubmit(e) {
    e.preventDefault();
    setTodos(currentTodos =>[{title:newTodo,completed:false}, ...currentTodos]);

     setNewTodo("");
    
}



    return (
        <form  onSubmit={handleSubmit} className = "container-sm mr-3 p-2" >
           <input type="text" 
                  placeholder="Introduce un nuevo To-do"
                  className=" form-control " 
                  onChange = {e=> setNewTodo(e.target.value) }
                  value={newTodo} 
           />
           
        </form>
    )
}
