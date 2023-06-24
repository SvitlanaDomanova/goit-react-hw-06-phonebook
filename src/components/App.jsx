import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import css from './styleApp.module.css'

const App = () => {

    return <div className="container">
        <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
       <Filter  />
      <ContactList  />
    </div>
 
};


export default App;