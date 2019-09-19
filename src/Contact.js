import React, { Component } from "react";

class Contact extends Component {
  state = {
    contact: null
  };
  componentDidMount() {
    const contact = this.props.fetchContact(this.props.match.params.id);
    this.setState({ contact });
  }

  render() {
    return (
      <>
        <h1>Contact Info</h1>
        {this.state.contact ? (
          <h3>{this.state.contact.name}</h3>
        ) : (
          <p>No contact found</p>
        )}
      </>
    );
  }
}

export default Contact;
