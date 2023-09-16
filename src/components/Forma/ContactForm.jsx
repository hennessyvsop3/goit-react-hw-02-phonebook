import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmit}>
          <p>Name</p>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
