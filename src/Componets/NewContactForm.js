import{useState} from "react";
import{useContext} from "react";
import {GlobalContext} from "../App"

export default function NewContactForm() {
 
    const{setContacts}=useContext(GlobalContext);
    
    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [address, setAddress] = useState("");
    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");
    
    // function handleName(e) {
    //     setName (e.target.value)
    // }
    // function handleLastName(e) {
    //     setLastName (e.target.value)
    // }
    // function handlePhoneNumber(e) {
    //     setPhoneNumber (e.target.value)
    // }
    // function handleAddress(e) {
    //     setAddress (e.target.value)
    // }
    // function handlePostalCode(e) {
    //     setPostalCode (e.target.value)
    // }
    // function handleCity(e) {
    //     setCity (e.target.value)
    //}
  const initialState={
            name:"",
            lastName:"",
            address:"",
            postalCode:"",
            city:"",
            phoneNumber:""
   };

     const[form,setForm]= useState(initialState)

    function handleInput(e) {

        const inputName= e.target.id;
        const newValue= e.target.value;
        setForm({...form,...{[inputName]: newValue}})
        
    }
  
   function submit(e) {
       e.preventDefault();  
   //   const newContact= {name,lastName,address,postalCode,city,phoneNumber};
  //      //setContacts([...contacts,newContact])//Necesitaría recibir "contacts"
        setContacts(currentContacts => [...currentContacts,newContact]);
  //      // e.target.reset();
        setForm(initialState);
  //      setLastName("");
  //      setAddress("");
  //      setCity("");
  //      setPostalCode("");
  //      setPhoneNumber("");
  //  // }

       const newContact ={
            name: form.name,
            lastName:form.lastName,
            address:form.address,
            postalCode:form.postalCode,
            city:form.city,
            phoneNumber:form.phoneNumber
        };

   }
    return (
        <form className="form-group" onSubmit={submit}>
        <input id="name"        value={form.name}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el nombre"/>
        <input id="lastName"    value={form.lastName}    onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce los apellidos"/>
        <input id="phoneNumber" value={form.phoneNumber} onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el teléfono"/>
        <input id="address"     value={form.address}     onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la dirección"/>
        <input id="postalCode"  value={form.postalCode}  onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce el código postal"/>
        <input id="city"        value={form.city}        onChange={handleInput} className="form-control mb-3" type="text" placeholder="Introduce la ciudad"/>
        <input type="submit" className="btn btn-success" value="Registrar"/>
        </form>
    )
  }
 