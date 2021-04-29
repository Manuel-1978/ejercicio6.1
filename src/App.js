import { createContext,useState,useEffect } from 'react';
import{BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';
import './App.css';
import ejercicio1 from './Pages/ejercicio1';
import ejercicio2 from './Pages/ejercicio2';
import ejercicio3 from './Pages/ejercicio3';
import ejercicio4 from './Pages/ejercicio4';

export const GlobalContext= createContext();


export default function App() {
  const initialContactsState =[
    {name:"Francisco",lastName: "Garcia Perez", address:"Calle x",city:"Granada",postalCode:18010,phoneNumber:666235547},
    {name:"Francisco",lastName: "Ramirez Perez", address:"Calle y",city:"Granada",postalCode:18010,phoneNumber:666235548},
    {name:"Francisco",lastName: "Fernandez Perez", address:"Calle f",city:"Granada",postalCode:18010,phoneNumber:666235549},
  ];
   const [contacts,setContacts] = useState(initialContactsState);
  
      
  useEffect(() => {
    const API_TODOS ="https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
    fetch(API_TODOS)
    .then(response=>response.json())
    .then (data=> setTodos(data.slice(0,20)));
      },[])
      const [todos,setTodos]= useState([]);
  return (
    <div className="App">
    <BrowserRouter>
     <nav className="navbar px-5 py-3 bg-dark " >
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active" exact to="/" >Ejercicio 1</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio2">Ejercicio 2</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio3">Ejercicio 3</NavLink>
       <NavLink className="text-decoration-none text-light font-weight-bold" activeClassName="active"  to="/ejercicio4">Ejercicio 4</NavLink>
    </nav>
    <GlobalContext.Provider value={{contacts,setContacts,todos,setTodos}}>
        <Switch>
          <Route exact path="/"           component={ejercicio1} />
          <Route path="/ejercicio2" component={ejercicio2} />
          <Route path="/ejercicio3" component={ejercicio3} />
          <Route path="/ejercicio4" component={ejercicio4} />
        </Switch> 
    </GlobalContext.Provider>
   </BrowserRouter>
   </div>
  );
}


