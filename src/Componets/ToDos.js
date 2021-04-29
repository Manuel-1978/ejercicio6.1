import"./ToDos.css";
import {useContext} from 'react';
import {GlobalContext} from "../App";

export default function ToDos() {
    
    const{todos,setTodos}=useContext(GlobalContext);
    
    const removeTodo = title =>setTodos(todos.filter( toDo => toDo.title !== title));
    
    const toggleCompleted = (e,index) => {
       
        if (e.target.tagName !== "BUTTON"){
          
            const newTodos=[...todos];
            newTodos[index].completed = !newTodos[index].completed;
             setTodos(newTodos);
        }
};

    return (
        
         <ul className= "container-lg m-auto col-12 col-sm-6 " >
            {todos.map((todo,index) => { 
                
                 return( 
                        <li  className={` d-flex justify-content-between list-group-item text-left ${todo.completed ? "completed" :""}`}
                              onClick={e=> toggleCompleted(e,index)}>  
                               {index}:{todo.title}
                              <span> <button  className="tn btn-danger float-right" onClick={()=>removeTodo(todo.title)}>x</button> </span>
                        </li> 
                    )
            } )}
        </ul>
      
    )
}
