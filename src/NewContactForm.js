import React, { Component } from "react";

class NewContactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phone: "",
      type: ""
    };

    console.log("NewContactForm constructor()");
  }

  updateName = e => {
    this.setState({
      name: e.target.value
    });
  };

  updateNumber = e => {
    this.setState({
      phone: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.props.history.push(`/contacts/${this.state.type}`);
    this.setState({
      name: "",
      phone: "",
      type: ""
    });
  };

  changeType = e => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value
    });
  };

  componentDidMount() {
    console.log("NewContactForm componentDidMount()");
  }

  render() {
    console.log("NewContactForm render()");
    return (
      <form onSubmit={this.submit}>
        <label>Name</label>
        <input
          onChange={this.updateName}
          type="text"
          value={this.state.name}
          label="Name"
        />
        <br />
        <label>Number</label>
        <input
          onChange={this.updateNumber}
          type="text"
          value={this.state.phone}
          label="Number"
        />
        <select onChange={this.changeType}>
          <option />
          <option value="business">Business</option>
          <option value="personal">Personal</option>
        </select>
        <button type="submit"> Create Contact</button>
      </form>
    );
  }
}

export default NewContactForm;
