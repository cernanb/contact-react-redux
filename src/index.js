import React, { Component } from "react";
import ReactDOM from "react-dom";
import ContactList from "./ContactList";
import NewContactForm from "./NewContactForm";
import About from "./About";
import Contact1 from "./Contact1";
import Home from "./Home";
import Home1 from "./Home1";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import Contact from "./Contact";

const contactData = [
  { id: 1, name: "Cernan Bernardo", phone: "555-555-5555", type: "personal" },
  { id: 2, name: "Avi Flombaum", phone: "555-444-4444", type: "business" },
  { id: 3, name: "Luke Ghenco", phone: "555-777-7777", type: "personal" },
  { id: 4, name: "Rachel Hawa", phone: "555-777-4444", type: "personal" },
  { id: 5, name: "Whitny Edwards", phone: "555-777-3333", type: "business" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contactData
    };

    //Used to initialize state in a React component
    console.log("App constructor()");
  }

  createContact = contact => {
    const updatedContacts = this.state.contacts.concat(contact);
    this.setState({
      contacts: updatedContacts
    });
  };

  fetchContact = id => {
    const contact = this.state.contacts.find(contact => contact.id === +id);
    return contact;
  };

  render() {
    const businessContacts = this.state.contacts.filter(function(contact) {
      return contact.type === "business";
    });
    const personalContacts = this.state.contacts.filter(function(contact) {
      return contact.type === "personal";
    });

    return (
      <Router>
        <Navbar bus={businessContacts.length} per={personalContacts.length} />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/contacts/business"
              render={() => (
                <ContactList
                  contacts={businessContacts}
                  type="Business"
                  color="red"
                />
              )}
            />
            <Route
              exact
              path="/contacts/personal"
              render={() => (
                <ContactList
                  contacts={personalContacts}
                  type="Personal"
                  color="blue"
                />
              )}
            />
            <Route
              path="/contacts/new"
              render={props => (
                <NewContactForm {...props} onSubmit={this.createContact} />
              )}
            />
            <Route
              path="/contacts/:id"
              render={props => (
                <Contact {...props} fetchContact={this.fetchContact} />
              )}
            />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// Routes
// '/'
// 'contacts/business'
// 'contacts/personal'
// '/contacts/new'
// '/about'

// Goals
// Review of class components
// Discuss functional components
// Example of functional component
// Container vs Presentational component
// Re-architect the Contacts app to use both Container and Presentational components

{
  /* <Navbar bus={businessContacts.length} per={personalContacts.length} />
          <ContactList
            contacts={businessContacts}
            type="Business"
            color="red"
          />
          <ContactList
            contacts={personalContacts}
            type="Personal"
            color="blue"
          />
          <NewContactForm onSubmit={this.createContact} />
          <About person={{ name: "Cernan", age: 45 }} /> */
}
