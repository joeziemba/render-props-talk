import React from "react";
import Input from "./Input";

class Form2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      validation: {
        name: false,
        email: false
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value }, this.validate);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  validate() {
    let { validation } = this.state;

    let fields = ["name", "email"];

    fields.forEach(field => {
      validation[field] = this.state[field] !== "";
    });

    this.setState({ validation });
  }

  render() {
    let { validation } = this.state;

    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <Input
            value={this.state.name}
            onChange={this.onChange}
            name={'name'}
            isValid={validation.name}
            errorMessage="This is required"
          />

          <Input
            value={this.state.email}
            onChange={this.onChange}
            name={'email'}
            isValid={validation.email}
            errorMessage="This is required"
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form2;
