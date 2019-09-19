import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  return (
    <li>
      <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
    </li>
  );
};

export default ContactCard;
