

import ListContact from '../Componets/ListContac';
import NewContactForm from '../Componets/NewContactForm';

function App() {


 
  return (
    <div className="container">

    <h2 className="my-4">Agenda</h2>
    <ListContact  />

    <h2 className="my-4">Formulario</h2>
    <NewContactForm />
        
    
    </div>
  );
}

export default App;
