import React, { Component } from 'react';
import { ContactForm } from './Forma/ContactForm';
import { nanoid } from 'nanoid';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilteredData = () => {
    if (this.state.filter) {
      return this.state.contacts.filter(contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(this.state.filter.toLowerCase())
      );
    } else {
      return this.state.contacts;
    }
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, { ...data, id: nanoid() }] };
    });
  };
  render() {
    return (
      <>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactsList contacts={this.handleFilteredData()} />
      </>
    );
  }
}
