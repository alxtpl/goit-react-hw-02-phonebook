import { Component } from 'react/cjs/react.production.min';
import './App.css';

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
  deleteItem = id =>
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit="">
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value=""
              onChange=""
            />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value=""
              onChange=""
            />
          </label>
          <button>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input type="text" name="filter" value="" onChange="" />
        <ul>
          <li>
            <span>name&number</span>
        <button type='button' onClick="">Delete</button>
          </li>
        </ul>

      </div>
    );
  }
}

export default App;
