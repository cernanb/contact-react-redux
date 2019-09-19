import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ bus, per }) => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contacts/business">Business Contacts - {bus}</Link>
    </li>
    <li>
      <Link to="/contacts/personal">Personal Contacts - {per}</Link>
    </li>
    <li>
      <Link to="/contacts/new">New Contact</Link>
    </li>
  </ul>
);

export default Navbar;
