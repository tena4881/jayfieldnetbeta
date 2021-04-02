import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    console.log(this.state)
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <div>
          <label>
            First Name :
            <input
              name="fname"
              type="text"
              value={this.state.fname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              name="lname"
              type="text"
              value={this.state.lname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
            <button onClick={this.onSubmitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SimpleForm;