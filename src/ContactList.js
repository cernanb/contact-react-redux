import React, { Component } from "react";
import ContactCard from "./ContactCard";

// stateless functional presentational component
const ContactList = ({ contacts, type, color }) => (
  <div>
    <h1 style={{ color: color }}>{type}</h1>
    {contacts.map(contact => (
      <ContactCard key={contact.id} contact={contact} />
    ))}
  </div>
);

// class ContactList extends Component {
//   render() {

//   }
// }

export default ContactList;
