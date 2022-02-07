import { Component } from 'react';
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import ContactList from "./Components/ContactList/ContactList.jsx";

import './App.css';
;

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
 

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit="" />
        <ContactList onSubmit="" />
       

      </div>
    );
  }
}

export default App;
